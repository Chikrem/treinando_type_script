import { Negociacaocontroller } from "./controllers/nogociacao-controller.js";
const controller = new Negociacaocontroller();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
// const negociacoesView = new NegociacoesView;
// const template = negociacoesView.template();
// console.log(template);
