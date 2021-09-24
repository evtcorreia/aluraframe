class NegociacaoService {



    constructor()
    {
        this._http = new HttpService();
    }

    obterNegociacoesSemana() {


        /*     
            0: requisição ainda não iniciada.
            1: conexão com o servidor estabelecida.
            2: requisição recebida.
            3: processando requisição.
            4: requisição concluída e a resposta esta pronta.
        */

        return new Promise((resolve, reject) => {
        
            this._http.get('negociacoes/semana')
            .then(negociacoes => {
                resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
        })
            .catch(erro => {
                console.log(erro);
                reject('nao foi possivel obter negociacoes da semana')
            });      
        });
    }


    obterNegociacoesSemanaAnterior() {


        /*     
            0: requisição ainda não iniciada.
            1: conexão com o servidor estabelecida.
            2: requisição recebida.
            3: processando requisição.
            4: requisição concluída e a resposta esta pronta.
        */

            return new Promise((resolve, reject) => {
        
                this._http.get('negociacoes/anterior')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
            })
                .catch(erro => {
                    console.log(erro);
                    reject('nao foi possivel obter negociacoes da semana')
                });      
            });
        }

    obterNegociacoesSemanaRetrasada() {


        /*     
            0: requisição ainda não iniciada.
            1: conexão com o servidor estabelecida.
            2: requisição recebida.
            3: processando requisição.
            4: requisição concluída e a resposta esta pronta.
        */


            return new Promise((resolve, reject) => {
        
                this._http.get('negociacoes/retrasada')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
            })
                .catch(erro => {
                    console.log(erro);
                    reject('nao foi possivel obter negociacoes da semana')
                });      
            });
        }
    }