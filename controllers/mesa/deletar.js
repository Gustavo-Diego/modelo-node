const mesa = require('../../models/mesa')

module.exports = {

    async deletar(req, res){
        mesa.destroy({where:{'id': req.params.id}}).then(function(){
            return res.json('Mesa deletada')
        }).catch(function(erro){
            return res.json('Essa mesa não existe: '+ erro+ ' valor : '+ req.params.id)
        })
    }
}