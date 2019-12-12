const mesa = require('../../models/mesa')

module.exports = {

    async buscar(req, res){
        mesa.findAll({order: [['id', 'asc']]}).then((todasMesas)=>{
            return res.json(todasMesas)
        }).catch((erro)=>{
            return res.json('Erro: '+erro)
        })
    }
}