const mesa = require('../../models/mesa')

module.exports = {

    async cadastro(req, res){
        mesa.create({ 
            numero: req.body.numero, 
            QR_codigo: req.body.QR_codigo,
            qtd_lugares: req.body.qtd_lugares,
            id_empresa: req.body.id_empresa
        }).then(function(){
            return res.json('Mesa cadastrada')
        }).catch(function(erro){
            return res.json('Erro: '+erro)
        })
    }
}