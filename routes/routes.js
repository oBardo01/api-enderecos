const express = require('express')
const router = express.Router()
const enderecosController = require('../controller/enderecosController.js')

router.post('/criarEndereco', enderecosController.criarEndereco);
router.get('/listar', enderecosController.listarTodosOsEnderecos);
router.get('/buscar', enderecosController.buscarEndereco);
router.get('/buscarPorId/:id', enderecosController.buscarEnderecoPorId);
router.get('/buscarPorFiltro/:filtro', enderecosController.buscarEnderecoFiltrado);
router.put('/atualizar/:id', enderecosController.atualizarEndereco);
router.delete('/deletar/:id', enderecosController.deletarEndereco);

module.exports = router