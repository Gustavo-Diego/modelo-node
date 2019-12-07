const user = require('../../models/usuario')

module.exports = {

    async buscar(req, res){
        user.findAll({order: [['id', 'asc']]}).then((todosUser)=>{
            return res.json(todosUser) 
        }).catch((erro)=>{
            return res.json(erro)
        })
    }
}