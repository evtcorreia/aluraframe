class ProxyFactory
{
    static createProxy(objeto, props, acao)
    {
        return new Proxy(objeto, {
            get :function(target, prop, receiver){
                if(props.includes(prop) && typeof(target[prop]) == typeof(Function)){
                    
                    return function(){
                        console.log(`interceptado ${prop}`);
                        Reflect.apply(target[prop], target, arguments)
                        return acao(target)
                    }
                }

                return Reflect.get(target, prop, receiver)
            },

            set(target, prop, value, receiver)
            {
                if(props.includes(prop)){
                    acao(target);
                }
                acao(target);
                return Reflect.set(target, prop, value, receiver);
            }
        });
    }
}