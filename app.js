const express = require('express');

const app = express()
const rotas = require('./routes/router.js')
const bd_lutadores = require('./database/lutadores.js')

app.use('/', rotas)

app.get('/', function(req,res) {
    res.render('../views/index.ejs');
})

//Use PORT provided in environment or default to 3000
const port = process.env.PORT || 3000;

// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", function () {
  console.log("SERVER OPEN")
})