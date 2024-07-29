export function logarTempoDeExecucao(emSegundos: boolean = false) { // parâmetro padrão
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor  // Um method decorator é aplicado a um método de uma classe e pode ser usado para observar, modificar ou substituir a definição do método. "descriptor" nos dá acesso a implementação do método decorado através de "descriptor.value".
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) { // metodos diferentes podem possuir quantidade de  parametros diferentes. "...args: any[]" retorna um array com os nomes de todos metodos da classe em que o decorator está aplicado.


            let divisor = 1;
            let unidade = 'milisegundos';

            if(emSegundos){
                divisor = 1000;
                unidade = 'segundos'
            }


            const t1 = performance.now(); // add const 1
            
            // metodo original
            const retorno = metodoOriginal.apply(this, args);  // this.nome_do_metodo -> update, adiciona, etc.
            
            // fim do metodo original
            
            const t2 = performance.now(); // add const 2
            console.log(`${propertyKey}, tempo de execução foi de: ${(t2 - t1)/divisor} ${unidade}`); // add log que faz o calc da performance
        }
    }
}

// Decorators no TypeScript são uma forma especial de sintaxe que permite modificar a classe ou seus membros (propriedades, métodos, acessores, parâmetros) de maneira declarativa. Eles são baseados na meta-programação e são amplamente utilizados para adicionar comportamento ou metadados a classes e seus membros sem alterar diretamente seu código. Decorators são uma característica experimental do TypeScript e exigem a configuração do compilador para habilitá-los.

// Existem cinco tipos principais de decorators no TypeScript:

// -Class Decorators
// -Method Decorators
// -Accessor Decorators
// -Property Decorators
