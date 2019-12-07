const Sequelize = require('sequelize')

//conexão com o banco de dados MYSQL
const conectar = new Sequelize('teste', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
})

conectar.authenticate().then(function(){
    console.log('Conectado ao banco de dados')
}).catch(function(erro){
    console.log('Erro ao conectar ao banco de dados: '+erro)
})

module.exports = {
    Sequelize: Sequelize,
    conectar: conectar
}