export class Negociacoes {
    constructor() {
        this.negociacoes = []; // O Array irá receber apenas elementos do tipo objeto 'Negociacao'.
    }
    // private negociacoes: Negociacao []; // Mesmo resultado.
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        // lista(): readonly Negociacao []{ // Mesmo resultado.
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes;
