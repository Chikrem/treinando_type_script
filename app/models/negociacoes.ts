import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = []; // O Array irá receber apenas elementos do tipo objeto 'Negociacao'.
    // private negociacoes: Negociacao []; // Mesmo resultado.

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> { // Este Array não pode ser modificado em tempo de compilação.
    // lista(): readonly Negociacao []{ // Mesmo resultado.
        return this.negociacoes;
    }
}

const negociacoes = new Negociacoes;