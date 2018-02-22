const {
    ipcRenderer
} = require('electron');

const timer = require('./timer.js');

let linkSobre = document.querySelector('#link-sobre');
let botaoPlay = document.querySelector('.botao-play');
let tempo = document.querySelector('.tempo');

linkSobre.addEventListener('click', function () {
    ipcRenderer.send('abrir-janela-sobre');
});

let botaoImgs = ['img/play-button.svg', 'img/stop-button.svg']
let play = false;
botaoPlay.addEventListener('click', function () {
    if (play) {
        console.log('clear');
        timer.parar();
        play = false;
    } else {
        console.log('play');
        timer.iniciar(tempo);
        play = true;
    }
    botaoImgs.reverse();
    botaoPlay.src = botaoImgs[0];
})