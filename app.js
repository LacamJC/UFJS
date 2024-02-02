const express = require('express');

const app = express()
const rotas = require('./routes/router.js')
const bd_lutadores = require('./database/lutadores.js')
const bodyParser = require('body-parser')
const Lutador = require('./api/Lutador.js')
const Lutadores = require('./api/index.js')
const lutadoresManager = require('./api/lutadorManager.js')

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(__dirname +'/public'))
app.set('view engine', 'ejs')

app.use('/', rotas)

app.get('/', function(req,res) {
    res.render('../views/index.ejs');
})

app.post('/cadLutador', function(req,res) {
  console.log("Cadastrando Lutador")
  // nome, nacionalidade,peso,idade, vitorias, derrotas, empates
  // console.log(req.body.nome)
  // console.log(req.body.nacionalidade)
  // console.log(req.body.idade)
  // console.log(req.body.peso)
  var lutador = new Lutador(req.body.nome,req.body.nacionalidade,req.body.idade,req.body.peso,0,0,0)

  if(lutador.getNacionalidade() == undefined)
  {
    lutador.setNacionalidade('Não especificado');
  }


  bd_lutadores.create({
    nome: lutador.getNome(),
    nacionalidade: lutador.getNacionalidade(),
    peso: lutador.getPeso(),
    categoria : lutador.getCategoria(),
    idade: lutador.getIdade(),
    vitorias: lutador.getVitorias(),
    derrotas: lutador.getDerrotas(),
    empates: lutador.getEmpates(),
    winrate: lutador.getWinrate()
  }).then(function() {
    console.log(("### Lutador CADASTRADO COM SUCESSO NO BANCO DE DADOS ###"))
    lutadoresManager.adicionarLutador(lutador)
    console.log(lutadoresManager.obterLutadores())
    res.status(200).send("Lutador cadastrado com sucesso!");

  }).catch(function(error) {
      console.error(("ERRO AO CADASTRAR Lutador: " + error));
      res.status(500).send("Erro ao cadastrar Lutador");
  })
    
})

app.get('/fase__selecao', function(req,res) {
  console.log("Mostrando opçoes")
  var lutadores__lista = lutadoresManager.obterLutadores()
  console.log(lutadores__lista)
  res.render('../views/jogar.ejs',{lutadores__lista, lutadores__lista})
})



//Use PORT provided in environment or default to 3000
const port = process.env.PORT || 3000;
// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", function () {
  console.log("SERVER OPEN")
})

