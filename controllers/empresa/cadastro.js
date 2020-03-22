const empresa = require('../../models/empresa')

module.exports = {
    async cadastro(req, res){
        empresa.create({ 
            nome: req.body.nome, 

        }).then(function(){
            return res.json('Empresa cadastrada')
        }).catch(function(erro){
            return res.json('Erro: '+erro)
        })
    }
}


