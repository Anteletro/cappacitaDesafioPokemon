const express = require('express')
const app = express()
const dataBase = require('./dataBase')
const bodyParcer = require('body-parser')
const bodyParser = require('body-parser')
const elementos = require('./elementos')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/pokemons',(req,res) => {
    res.send(dataBase.mostrarTodosPokemons())
})
app.get('/pokemons/:id',(req,res) => {
    res.send(dataBase.mostrarPokemon(req.params.id))
})
app.post('/pokemons/',(req,res) => {
    const pokemon = dataBase.salvarPokemons({
        nome: req.body.nome,
        tipo: req.body.tipo,
        fraqueza: req.body.fraqueza,
        resistencia: req.body.resistencia,
        hp: 100
        //elemento: elementos(req.body.tipo)
    })
    res.send(pokemon)
})

app.put('/pokemons/:id',(req,res) => {
    const pokemon = dataBase.atualizarPokemon(req.params.id, {
        nome: req.body.nome,
        tipo: req.body.tipo,
        id: req.params.id
    })
    res.send(pokemon)
})

app.delete('/pokemons/:id',(req,res) => {
    res.send(dataBase.deletarPokemon(req.params.id))

})

app.delete('/pokemons',(req,res) => {
    res.send(dataBase.deletarTudo())

})

app.post('/batalha', (req, res) => {
    res.send(dataBase.batalhaPokemon(req.body.id1, req.body.id2))
} )

app.post('/cura', (req, res) => {
    res.send(dataBase.cura(req.body.id))
} )

app.listen(1563)