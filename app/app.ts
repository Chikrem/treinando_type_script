import { Negociacaocontroller } from "./controllers/nogociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new Negociacaocontroller();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    })}
else {
    throw Error(`Não foi possivel inicializar aplicação! Verifique o forms.`)
}
    

// const negociacoesView = new NegociacoesView;
// const template = negociacoesView.template();
// console.log(template);