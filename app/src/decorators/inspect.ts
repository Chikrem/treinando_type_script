 
   export function inspect(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor  
    ){
        const metodoOriginal = descriptor.value
        descriptor.value = function (...args: any[]){

            console.log(`--- Método ${propertyKey}`); // retorna o nome do método
            console.log(`-------- parâmetros: ${JSON.stringify(args)}`); // retorna a lista de parametros no formato de string

            const retorno = metodoOriginal.apply(this, args);
            console.log(`-------- retorno: ${JSON.stringify(retorno)}`); // retorna a lista de retornos no formato de string
            
            return retorno;
        }
        return descriptor;
    }
