// timer.js


const moment = require('Moment');
let segundos;
let timer;

module.exports = {
    iniciar(el) {
        let tempo = moment.duration(el.textContent);
        segundos = tempo.asSeconds();
        // removendo o setInterval anterior
        clearInterval(timer);
        timer = setInterval(() => {
            segundos++;
            el.textContent = this.segundosParaTempo(segundos);
        }, 1000);
    },
    parar() {
        clearInterval(timer);
    },
    segundosParaTempo(segundos) {
        return moment().startOf('day').seconds(segundos).format("HH:mm:ss");
    }

}