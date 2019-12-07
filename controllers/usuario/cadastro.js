const bcrypt = require('bcryptjs')

const user = require('../../models/usuario')

module.exports = {

    async cadastro(req, res){
        var erros = []

        if(!req.body.nome || req.body.nome == undefined || req.body.nome == null){
            erros.push({texto: 'Nome inválido!'})
        }
        
        if(!req.body.email || req.body.email == undefined || req.body.email == null){
            erros.push({texto: 'E-mail inválido!'})
        }

        if(!req.body.senha || req.body.senha == undefined || req.body.senha == null){
            erros.push({texto: 'Senha inválido!'})
        }
        
        if(req.body.senha.length < 5){
            erros.push({texto: 'Senha muito curta!'})
        }

        if(erros.length > 0){
            return res.json(erros)
        }else{

            user.findOne({where:{email: req.body.email}}).then((usuario)=>{
                if(usuario){
                    erros.push({texto: 'já existe esse usuário'})
                    return res.json(erros)
                }else{
                    bcrypt.genSalt(10,(erro, salt)=>{
                        bcrypt.hash(req.body.senha, salt, (erro, hash)=>{  //hash de da senha para segurança
                            if(erro){
                                res.json(erro)
                            }else{
                                const senha = hash 

                                user.create({ 
                                    nome: req.body.nome, 
                                    email: req.body.email,
                                    senha: senha,
                                }).then((usuario)=>{
                                    return res.json(usuario)
                                }).catch(function(erro){
                                    erros.push({erro: ' erro interno ao cadastar'})
                                    return res.json(erros)
                                })
                            }
                        })
                    })
                }
            })
        }
    }
}