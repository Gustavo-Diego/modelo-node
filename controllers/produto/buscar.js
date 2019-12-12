const produto = require('../../models/produto')

module.exports = {

    async buscar(req, res){
        produto.findAll({order: [['id', 'asc']]}).then((todosProdutos)=>{
            return res.json(todosProdutos)
        }).catch((erro)=>{
            return res.json(erro)
        })
    }
}