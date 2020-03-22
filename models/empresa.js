const conexao = require('../conexao/conexao')

//empresa
const empresa = conexao.conectar.define('empresas',{
    nome:{
        type: conexao.Sequelize.STRING
    }
    // email:{
    //     type: conexao.Sequelize.STRING
    // },
    // senha:{
    //     type: conexao.Sequelize.STRING
    // },
    // estado:{
    //     type: conexao.Sequelize.STRING
    // },
    // cidade:{
    //     type: conexao.Sequelize.STRING
    // },
    // rua:{
    //     type: conexao.Sequelize.STRING
    // },
    // bairro:{
    //     type: conexao.Sequelize.STRING
    // },
    // numero:{
    //     type: conexao.Sequelize.STRING        
    // },
    // cep:{
    //     type: conexao.Sequelize.STRING
    // },
    // cnpj:{
    //     type: conexao.Sequelize.STRING
    // },
    // foto:{
    //     type: conexao.Sequelize.STRING
    // }
})

// // cria a tabela de empresas configurado no banco de dados
// empresa.sync({force:true}).then(()=>{
//     console.log('tabela criada com sucesso')
// }).catch((erro)=>{
//     console.log('Erro ao criar tabela: '+ erro)
// })

module.exports = empresa