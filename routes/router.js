const express = require('express')
const router = express.Router()

// const Lutadores = require('../api/index')
var Lutadores = require('../api/lutadorManager')
var LutadoresLista = Lutadores.obterLutadores()
router.get('/LutadoresJSON', function(req,res){
    res.json(LutadoresLista)
})

router.get('/cadastro', function(req,res){
    res.render('../views/cadastro.ejs')
})

router.get('/jogar', function(req,res) {
    res.render('../views/jogar.ejs')
})

module.exports = router