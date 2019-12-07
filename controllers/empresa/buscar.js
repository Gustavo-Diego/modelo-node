const user = require('../../models/empresa')

module.exports = {

    async buscar(req, res){
        user.findAll({order: [['id', 'asc']]}).then((empresas)=>{
            return res.json(empresas) 
        }).catch((erro)=>{
            return res.json(erro)
        })
    }
}