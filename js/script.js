const mario = document.querySelector(".mario");
const palanque = document.querySelector('.pipe');

//adiciona a classe do css jump e remove
const jump =()=> {
    mario.classList.add('jump');


    setTimeout(()=> {
        mario.classList.remove('jump');
    },500);

}

//encostou para a animação e game over
const loop = setInterval(()=> {



    const palanquePosition = palanque.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    

    if (palanquePosition <= 120 && palanquePosition > 0 && marioPosition < 80) {
        
        //parar animação palanque
        palanque.style.animation ="none";
        palanque.style.left =`${palanquePosition}px`;

        //parar animação mario
        mario.style.animation ="none";
        mario.style.bottom =`${marioPosition}px`;


       //muda a imagem do mario quando morre 
        mario.src = './imagens/game-over.png';

        //muda tamanho e margin para o mario fica adequado
        mario.style.width ='75px';
        mario.style.marginLeft = '50px';
        
        //acabar o jogo - parar de rodar o loop console log
        clearInterval(loop);
    }
},10);



//quando aperta seta pra cima chama a funcao adionando no css a animação
document.addEventListener('keydown', jump);