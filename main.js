function tocasom (){
    document.querySelector().play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTeclas. length){                               
   
    listaDeTeclas[contador].onclick = tocasompom;

    contador = contador + 1;

   console.log(contador);
}
