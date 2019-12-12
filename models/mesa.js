const conexao = require('../conexao/conexao')

//mesa
const mesa = conexao.conectar.define('mesas',{
    numero:{
        type: conexao.Sequelize.STRING
    },
    QR_codigo:{
        type: conexao.Sequelize.STRING
    },
    qtd_lugares:{
        type: conexao.Sequelize.INTEGER
    },
    id_empresa:{
        type: conexao.Sequelize.STRING
    }
})

// // cria a tabela de mesas configurado no banco de dados
// mesa.sync({force:true}).then(()=>{
//     console.log('tabela criada com sucesso')
// }).catch((erro)=>{
//     console.log('Erro ao criat tabela: '+ erro)
// })

module.exports = mesa