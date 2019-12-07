// passport configuração
const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

//usuario para logar
const empresa = require('../models/empresa')

// passport controle usuário
module.exports = function(passport){

    passport.use(new localStrategy({usernameField: 'email', passwordField: 'senha'}, (email, senha, done)=>{

        empresa.findOne({where: {email: email}}).then((empresa)=>{
            if(!empresa){
                return done(null, false, {message: "Essa conta não existe"})
            }
            
            bcrypt.compare(senha, empresa.senha, (erro, batem) =>{

                if(batem){
                    return done(null, empresa)
                }else{
                    return done(null, false, "senha incorreta")
                }

            })
        })
    }))

    passport.serializeUser((empresa, done)=>{
        done(null, empresa.id)
    })

    passport.deserializeUser((id, done) =>{
        empresa.findById(id,(err, empresa)=>{
            done(err,empresa)
        })
    })
    
}