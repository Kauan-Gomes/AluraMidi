
// Som Pom 
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


const ListaDeteclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < ListaDeteclas.length; contador++) {

    const tecla = ListaDeteclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;


    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        console.log(evento.code)
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}