const express = require('express')

const cadastroUsuario = require('../controllers/usuario/cadastro')
const buscarUsuarios = require('../controllers/usuario/buscar')
const deletaUsuario = require('../controllers/usuario/deletar')

const cadastroEmpresa = require('../controllers/empresa/cadastro')
const buscarEmpresas = require('../controllers/empresa/buscar')
const deletaEmpresa = require('../controllers/empresa/deletar')

const cadastroProduto = require('../controllers/produto/cadastro')
const buscarProdutos = require('../controllers/produto/buscar')
const deletaProduto = require('../controllers/produto/deletar')

const cadastroMesa = require('../controllers/mesa/cadastro')
const buscarMesas = require('../controllers/mesa/buscar')
const deletaMesa = require('../controllers/mesa/deletar')

const rotas = express.Router() // usando a propriedade de rotas do express 

//rotas

//rota de usuários
//cadastro de usuário
rotas.post('/cadastroUsuario', cadastroUsuario.cadastro)
// buscar todos os usuarios
rotas.get('/buscarUsuarios', buscarUsuarios.buscar)
// deletar usuário
rotas.delete('/deletaUsuario/:id', deletaUsuario.deletar)

//rotas de empresas
//cadastro de empresa
rotas.post('/cadastroEmpresa', cadastroEmpresa.cadastro)
//buscar empresas
rotas.get('/buscarEmpresas', buscarEmpresas.buscar)
// deletar empresa
rotas.delete('/deletaEmpresa/:id', deletaEmpresa.deletar)

//rotas produtos
//cadastro de produto
rotas.post('/cadastroProduto', cadastroProduto.cadastro)
//busca de produto
rotas.get('/buscarProdutos', buscarProdutos.buscar)
//deletar produto
rotas.delete('/deletaProduto/:id', deletaProduto.deletar)

//rotas mesa
//cadastro de mesa
rotas.post('/cadastroMesa', cadastroMesa.cadastro)
//buscar mesa
rotas.get('/buscarMesas', buscarMesas.buscar)
//deletar mesa
rotas.delete('/deletaMesa/:id', deletaMesa.deletar)

module.exports = rotas