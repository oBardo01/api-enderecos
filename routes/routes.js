const express = require('express')
const router = express.Router()
const enderecosController = require('../controller/enderecosController.js')

router.post('/', enderecosController.criarEndereco);
router.get('/listar', enderecosController.listarTodosOsEnderecos);
router.get('/busca', enderecosController.buscarEndereco);
router.put('/atualizar/:id', enderecosController.atualizarEndereco);
router.delete('/deletar/:id', enderecosController.deletarEndereco);

module.exports = router