import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class Negociacaocontroller {
    private inputData: HTMLInputElement;      //type="date" no html
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor')as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void { // Add a nova negociacao

        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);  // 1 Cria Obj Negociacao
        
        if (!this.ehDiaUtil(negociacao.data)) {     // Early return
            this.mensagemView.update('Negociações abertas apenas em dias úteis!');
            return;  
            
        } else {   
            this.negociacoes.adiciona(negociacao); // 2 Adiciona o Obj Negociacao no Array Negociacoes
            this.limpaFormulario(); // 5 Limpa e reseta o foco do formulário
            this.atualizaView();         
        }
        
    }

    private ehDiaUtil(data: Date){
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO; // detDay retorna do dia da semana. Sendo Dom = 0 e Sáb = 6. A lógica permite transações apenas durante os dias úteis da semana.
    }

    // private criaNegociacao(): Negociacao {

    //     // Os dados vindos do DOM estão em formato HTMLInputElement string e precisam ser convertidos pros respectivos tipos
    //     // esperados nos atributos privados

    //     const esp = /-/g;   //O atributo de Data no DOM possui o formato 24/07/2024 e o Date TS espera 24,07,2024
    //     const date = new Date(this.inputData.value.replace(esp, ',')); // Trocar as barras '/' de exp por vírgulas ',' e salvar em 'date'
    //     const quantidade = parseInt(this.inputQuantidade.value); // Podemos usar parseInt e parseFloat do JS para converter strings para valores numéricos
    //     const valor = parseFloat(this.inputValor.value);
    //     return new Negociacao(date, quantidade, valor);

    // }

    private limpaFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus(); 
    }

    private atualizaView() : void {
        this.negociacoesView.update(this.negociacoes); // 3 Atualiza a tabela com os novos Obj
        this.mensagemView.update('Negociação adicionada com sucesso!') // 4 Emite a mensagem de alerta de operação bem sucedida
    }
}