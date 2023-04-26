
// Som Pom 
function tocaSom(idElementoAudio){
    
    
    document.querySelector(idElementoAudio).play();
}


const ListaDeteclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < ListaDeteclas.length){

    const tecla = ListaDeteclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`
    
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
    contador = contador + 1;


}