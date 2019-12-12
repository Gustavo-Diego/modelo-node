const conexao = require('../conexao/conexao')

//produto
const produto = conexao.conectar.define('produtos',{
    nome:{
        type: conexao.Sequelize.STRING
    },
    preco:{
        type: conexao.Sequelize.DECIMAL
    },
    descricao:{
        type: conexao.Sequelize.STRING
    },
    id_empresa:{
        type: conexao.Sequelize.STRING
    }
})

// // cria a tabela de produtos configurado no banco de dados
// produto.sync({force:true}).then(()=>{
//     console.log('tabela criada com sucesso')
// }).catch((erro)=>{
//     console.log('Erro ao criat tabela: '+ erro)
// })

module.exports = produto