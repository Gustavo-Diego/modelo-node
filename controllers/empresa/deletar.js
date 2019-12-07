const empresa = require('../../models/empresa')

module.exports = {

    async deletar(req, res){
        empresa.destroy({where:{'id': req.params.id}}).then(function(){
            return res.json('Empresa deletada')
        }).catch(function(erro){
            return res.json('essa empresa não existe: '+ erro)
        })
    }
}