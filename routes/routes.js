const express = require('express')
const router = express.Router()
const enderecosController = require('../controller/enderecosController.js')

router.post('/', enderecosController.criarEndereco);
router.get('/', enderecosController.listarTodosOsEnderecos);
router.get('/:busca', enderecosController.buscarEndereco);
router.put('/:id', enderecosController.atualizarEndereco);
router.delete('/:id', enderecosController.deletarEndereco);

module.exports = router