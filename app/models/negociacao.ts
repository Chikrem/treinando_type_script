export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{ // Método estático podemos ter acesso diretamente na classe, sem precisar passar por uma instância
                // Os dados vindos do DOM estão em formato HTMLInputElement string e precisam ser convertidos pros respectivos tipos
        // esperados nos atributos privados

        const esp = /-/g;   //O atributo de Data no DOM possui o formato 24/07/2024 e o Date TS espera 24,07,2024
        const date = new Date(dataString.replace(esp, ',')); // Trocar as barras '/' de exp por vírgulas ',' e salvar em 'date'
        const quantidade = parseInt(quantidadeString); // Podemos usar parseInt e parseFloat do JS para converter strings para valores numéricos
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor); // Retorna uma instância com os valores convertidos.
    }

}