import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class Negociacaocontroller {
    private inputData: HTMLInputElement;      //type="date" no html
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(): void {

        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limpaFormulario();
    }

    criaNegociacao(): Negociacao {

        // Os dados vindos do DOM estão em formato HTMLInputElement string e precisam ser convertidos pros respectivos tipos
        // esperados nos atributos privados

        const esp = /-/g;   //O atributo de Data no DOM possui o formato 24/07/2024 e o Date TS espera 24,07,2024
        const date = new Date(this.inputData.value.replace(esp, ',')); // Trocar as barras '/' de exp por vírgulas ',' e salvar em 'date'
        const quantidade = parseInt(this.inputQuantidade.value); // Podemos usar parseInt e parseFloat do JS para converter strings para valores numéricos
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);

    }

    limpaFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus(); 
    }
}