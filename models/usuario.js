const conexao = require('../conexao/conexao')

// usuário
const usuario = conexao.conectar.define('usuarios', {
   nome: {
       type: conexao.Sequelize.STRING
   },
   email:{
       type: conexao.Sequelize.STRING
   },
   senha:{
       type: conexao.Sequelize.STRING
   }
})

//cria a tabela de usuarios configurado no banco de dados
// usuario.sync({force:true}).then(()=>{
//     console.log('tabela criada com sucesso')
// }).catch((erro)=>{
//     console.log('Erro ao criat tabela: '+ erro)
// })

module.exports = usuario