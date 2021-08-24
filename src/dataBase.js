const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

const pokemons = []


function salvarPokemons(poke) {
    if(!poke.id) poke.id = sequence.id
    pokemons[poke.id] = poke
    return poke
}

function mostrarPokemon(id) {
    return pokemons[id] || {}
}

function mostrarTodosPokemons() {
    return Object.values(pokemons)
}

function atualizarPokemon(id, pokemon) {
    pokemons[id] = pokemon
    return pokemon
}

function deletarPokemon(id) {
    sequence._id = sequence._id - 1
    const pokemonDeletado = pokemons[id]
    pokemons.splice(id, 1)
    pokemons.forEach(pokemon => {
        if(pokemon.id > id) {
            pokemon.id = pokemon.id - 1
        }
    })
    return pokemonDeletado
}
function deletarTudo() {
    if (pokemons.length != 0) {
    sequence._id = 1
    pokemons.splice(1,(pokemons.length - 1))
    return pokemons
    }
}

function batalhaPokemon(id1, id2) {

    const superEfetivo = 40
    const efetivo = 20
    const naoEfetivo = 10

    const pokemon1 = pokemons[id1]
    const pokemon2 = pokemons[id2]

    if(pokemon1.hp != 0 && pokemon2.hp != 0){
        if(pokemon1.tipo == pokemon2.fraqueza) {
            pokemon2.hp = pokemon2.hp - superEfetivo
        } else if(pokemon1.tipo == pokemon2.resistencia) {
            pokemon2.hp = pokemon2.hp - naoEfetivo
        } else {
            pokemon2.hp = pokemon2 - efetivo
        }
    }

    if(pokemon1.hp != 0 && pokemon2.hp != 0){
        if(pokemon2.tipo == pokemon1.fraqueza) {
            pokemon1.hp = pokemon1.hp - superEfetivo
        } else if(pokemon2.tipo == pokemon1.resistencia) {
            pokemon1.hp = pokemon1.hp - naoEfetivo
        } else {
            pokemon1.hp = pokemon1 - efetivo
        }
    }
    if(pokemon1.hp < 0 ) pokemon1.hp = 0
    if(pokemon2.hp < 0 ) pokemon2.hp = 0

    return `${pokemon1.nome}: ${pokemon1.hp} / ${pokemon2.nome}: ${pokemon2.hp}`
}

function cura(id) {
    const cura = 20
    let pokemon = pokemons[id]
    pokemon.hp = pokemon.hp + cura
    if (pokemon.hp > 100) pokemon.hp = 100

    return `${pokemon.nome}: ${pokemon.hp}`
}


module.exports = { salvarPokemons, mostrarPokemon, mostrarTodosPokemons, atualizarPokemon, deletarPokemon, deletarTudo, batalhaPokemon, cura}
