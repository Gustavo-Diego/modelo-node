const user = require('../../models/usuario')

module.exports = {

    async deletar(req, res){
        user.destroy({where:{'id': req.params.id}}).then(function(){
            return res.json('Usuario deletado')
        }).catch(function(erro){
            return res.json('usuários não existe erro')
        })
    }
}