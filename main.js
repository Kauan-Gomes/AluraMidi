
// Som Pom 
function tocaSom(seledorAudio) {
    const elemento = document.querySelector(seledorAudio);
    
    if (elemento && elemento.localName === 'audio') {
            elemento.play();
    }
    else{
        console.log('Elemento não encontrado')
    }

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

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}