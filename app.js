const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const session = require('express-session')

const rotas = require('./routes/routes')
const passportUsuario = require('passport')
require('./config/passportUsuario')(passportUsuario)

const app = express()

app.use(cors())

app.use(session({
    secret: 'muitosecreto',
    resave: true,
    saveUninitialized: true
}))

//passport de login de usuario
app.use(passportUsuario.initialize())
app.use(passportUsuario.session())

//body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const porta = process.env.PORT || 3003; // porta de conexão

app.use(rotas)

// rota de login do usuário
app.post('/loginUsuario',(req, res) =>{
    passportUsuario.authenticate('local',
    function(err, usuario){
        if(!usuario){
            res.json(err)
            console.log(err)
        }else{
            res.json(usuario)
            console.log(usuario)
        }
    }
    )(req, res)
})

app.listen(porta, ()=>{
    console.log(`o servidor está rodando na por http://localhost:${porta}`)
})