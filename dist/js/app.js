// import { Negociacao } from "./models/negociacao.js";
// const negociacao = new Negociacao(new Date(), 10, 100);
// console.log(negociacao);
// console.log(negociacao.data);
// console.log(negociacao.volume);
// console.log(negociacao.valor);
// console.log(negociacao.valor);
import { Negociacaocontroller } from "./controllers/nogociacao-controller.js";
const controller = new Negociacaocontroller();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
