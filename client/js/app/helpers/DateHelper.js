class DateHelper
{
    static textoParaData(texto)
    {

        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            {
                throw new Error('Deve estar no formato aaaa-mm-dd')
            }
            
        return new Date(
            ...texto
            .split('-')
            .map(function(item, indice){
                if(indice == 1)
                {
                    return item;
                }
                return item;
            })
        );
    }

    static dataParaTexto(data)
    {
        return `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
        
        
        
        data.getDate() 
            + '/' + data.getMonth() 
            + '/' + data.getFullYear();
    }
}