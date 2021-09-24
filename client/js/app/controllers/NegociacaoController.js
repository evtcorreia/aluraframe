class NegociacaoController
{

    constructor()
    {
        let $ = document.querySelector.bind(document)
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor')
        
        
        
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            this._negociacoesView,
            'adiciona', 'esvazia'
        );
        
        
    

        //this._negociacoesView.update(this._listaNegociacoes)
        
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagem = new Bind(
            new Mensagem(),
            this._mensagemView,
            'text'
        );
        
        
        /*  ProxyFactory.createProxy(
            new Mensagem(), ['texto'], (model) =>
                this._mensagemView.update(model)
        ); */

        //this._mensagemView.update(this._mensagem)
    }


    apaga()
    {
        this._listaNegociacoes.esvazia();
    

        this._mensagem = 'Negociacoes Apagadas com sucesso';
        this._mensagemView.update(this._mensagem)
    }
    adiciona(event)
    {
        event.preventDefault();
        let data = DateHelper.textoParaData(this._inputData.value);

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        ); 

        this._mensagem.texto = 'NEgociação adicionada com sucesso'
        //this._mensagemView.update(this._mensagem)
            
            
            
        
        this._listaNegociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._listaNegociacoes);

        this._limpaFormulario();
    }

    importaNegociacoes()
    {
        let service = new NegociacaoService();


        Promise.all(
            [service.obterNegociacoesSemana(), 
            service.obterNegociacoesSemanaAnterior(), 
            service.obterNegociacoesSemanaRetrasada() ]
        ).then(negociacoes => {

            negociacoes
                .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
        })
        .catch(error => this._mensagem.texto = error);

    
        
    }

    _limpaFormulario()
    {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0


        this._inputData.focus();

    }
}