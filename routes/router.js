const express = require('express')
const router = express.Router()

const Lutadores = require('../api/index')
router.get('/LutadoresJSON', function(req,res){
    res.json(Lutadores)
})

module.exports = router