import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {

    private elemento: HTMLElement;

    constructor(seletor: string) {      // O contrutor recebe um seletor do tipo string que vai ser a classe pertencente à ID html onde a tabela será renderizada.
        this.elemento = document.querySelector(seletor);
    }


    template(model: Negociacoes): string {
        return `
        
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {     // Para cada elemento do Array retorna um map
            return `
                    <tr>
                        <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                    `
        }).join('')}    
                    
            </tbody>
        </table>
       
        `
    }

    update(model: Negociacoes): void { // Sempre que um novo obj é inserido no Array o metodo Update é invocado e cria um novo template de tabela com os novos elementos.
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}