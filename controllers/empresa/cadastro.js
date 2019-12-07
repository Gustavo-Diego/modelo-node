const bcrypt = require('bcryptjs')

const empresa = require('../../models/empresa')

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
    
            empresa.findOne({where:{email: req.body.email}}).then((empresa)=>{
                if(empresa){
                    erros.push({texto: 'já existe essa empresa'})
                    return res.json(erros)
                }else{
                    bcrypt.genSalt(10,(erro, salt)=>{
                        bcrypt.hash(senha, salt, (erro, hash)=>{  //hash de da senha para segurança
                            if(erro){
                                return res.json(erro)
                            }else{
                                const senha = hash
    
                                empresa.create({ 
                                    nome: req.body.nome, 
                                    email: req.body.email,
                                    senha: senha,
                                    cidade: req.body.cidade,
                                    rua: req.body.rua,
                                    bairro: req.body.bairro,
                                    numero: req.body.numero,
                                    cep: req.body.cep,
                                    cnpj: req.body.cnpj,
                                    foto: req.body.foto
                                }).then((empresa)=>{
                                    return res.json(empresa)
                                }).catch((erro)=>{
                                    return res.json(erro)
                                })                            
                            }
                        })
                    })                
                }
            })
        }              
    }
}


