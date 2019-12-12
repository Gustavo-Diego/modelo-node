const produto = require('../../models/produto')

module.exports = {

    async deletar(req, res){
        produto.destroy({where:{'id': req.params.id}}).then(function(){
            return res.json('Produto deletado')
        }).catch(function(erro){
            return res.json('esse produto n existe: '+ erro+ ' valor : '+ req.params.id)
        })
    }
}