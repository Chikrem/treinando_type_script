export abstract class View<T> { // A classe pai abstrata não pode ser instanciada diretamente, apenas pode ser herdada.

    protected elemento: HTMLElement; // Classes filhas podem acessar protected.
    private escapar = false

    constructor(seletor: string, escapar?: boolean) {      // O contrutor recebe um seletor do tipo string que vai ser a classe pertencente à ID html onde a tabela será renderizada.
        // this.elemento = document.querySelector(seletor);
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else{
            throw Error (`Seletor ${seletor} não existe no DOM.`)
        }

        if (escapar) {
            this.escapar = escapar;
        }
    }
    
    
    public update(model: T): void { // Sempre que um novo obj é inserido no Array o metodo Update é invocado e cria um novo template de tabela com os novos elementos.
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, '');
        }
        this.elemento.innerHTML = template;
    }
    
    protected abstract template(model: T): string;  // O método abstrato deve ser implementado pelas classe filhas


}