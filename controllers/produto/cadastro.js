const produto = require('../../models/produto')

module.exports = {

    async cadastro(req, res){
        produto.create({ 
            preco: req.body.preco, 
            id_empresa: req.body.id_empresa,
            nome: req.body.nome,
            descricao: req.body.descricao,
        }).then(function(){
            return res.json('Produto cadastrado')
        }).catch(function(erro){
            return res.json('Erro: '+erro)
        })
    }
}