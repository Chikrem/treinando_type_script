import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    protected template(model: Negociacoes): string {
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
                        <td>${this.formatarData(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                    `
        }).join('')}    
                    
            </tbody>
        </table>
       
        `
    }

    private formatarData( data: Date) : string {
        return new Intl.DateTimeFormat().format(data);
    }

    // update(model: Negociacoes): void { // Sempre que um novo obj é inserido no Array o metodo Update é invocado e cria um novo template de tabela com os novos elementos.
    //     const template = this.template(model);
    //     this.elemento.innerHTML = template;
    // }
}