export class MensagemView {

    private elemento: HTMLElement;

    constructor(seletor: string) {      // O contrutor recebe um seletor do tipo string que vai ser a classe pertencente à ID html onde a tabela será renderizada.
        this.elemento = document.querySelector(seletor);
    }


    template(model: string): string {
        return `
              <p class="alert alert-info">${model}</p>
        `
    }

    update(model: string): void { 
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}