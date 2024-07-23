import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class Negociacaocontroller {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao(); // 1 Cria Obj Negociacao
        this.negociacoes.adiciona(negociacao); // 2 Adiciona o Obj Negociacao no Array Negociacoes
        this.negociacoesView.update(this.negociacoes); // 3 Atualiza a tabela com os novos Obj
        this.mensagemView.update('Negociação adicionada com sucesso!'); // 4 Emite a mensagem de alerta de operação bem sucedida
        this.limpaFormulario(); // 5 Limpa e reseta o foco do formulário 
    }
    criaNegociacao() {
        // Os dados vindos do DOM estão em formato HTMLInputElement string e precisam ser convertidos pros respectivos tipos
        // esperados nos atributos privados
        const esp = /-/g; //O atributo de Data no DOM possui o formato 24/07/2024 e o Date TS espera 24,07,2024
        const date = new Date(this.inputData.value.replace(esp, ',')); // Trocar as barras '/' de exp por vírgulas ',' e salvar em 'date'
        const quantidade = parseInt(this.inputQuantidade.value); // Podemos usar parseInt e parseFloat do JS para converter strings para valores numéricos
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limpaFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
