export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;  // Corrigido para 'number'
    // private _valor: number;       // Corrigido para 'number'
    // constructor(data: Date, quantidade: number, valor: number) {  // Corrigido para 'number'
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    } // Declarando tipagem de atributos diretamente no construtor.
    get data() {
        const data = new Date(this._data.getTime()); // Cria uma copia de "_data" e retorna como "data". Evitando que este atributo seja modificado por métodos do obj. Date SetDate().
        return this.data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
}
// Equivalente usando atributos public readonly
//     export class Negociacao {
//     constructor(
//         public readonly data: Date,
//         public readonly quantidade: number,
//         public readonly valor: number
//     ) { }
//     get volume(): number {       // Corrigido para 'number'
//         return this.valor * this.quantidade;
//     }
// }
