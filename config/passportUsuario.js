// passport configuração
const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

//usuario para logar
const user = require('../models/usuario')

// passport controle usuário
module.exports = function(passport){

    passport.use(new localStrategy({usernameField: 'email', passwordField: 'senha'}, (email, senha, done)=>{

        user.findOne({where: {email: email}}).then((usuario)=>{
            if(!usuario){
                return done(null, false, {message: "Essa conta não existe"})
            }
            
            bcrypt.compare(senha, usuario.senha, (erro, batem) =>{

                if(batem){
                    return done(null, usuario)
                }else{
                    return done(null, false, "senha incorreta")
                }

            })
        })
    }))

    passport.serializeUser((usuario, done)=>{
        done(null, usuario.id)
    })

    passport.deserializeUser((id, done) =>{
        user.findById(id,(err, usuario)=>{
            done(err,usuario)
        })
    })
    
}