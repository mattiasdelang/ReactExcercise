const express = require('express')
const fs = require('fs')
const router = express.Router()
const data = require('../data/pokemon.json')

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

router.get('/', async (req, res, next) => {
    await sleep(123)
    const pokemon = data.pokemon.map(({ id, url, sprite, favorite }) => { return { id, url, sprite, favorite } })
    if (pokemon) return res.status(200).json(pokemon)
    return res.status(404).json({ error: { message: 'Not found' } })
})

router.get('/:id', async (req, res, next) => {
    await sleep(123)
    const pokemon = data.pokemon.find(p => p.id == req.params.id)
    if (pokemon) return res.status(200).json(pokemon)
    return res.status(404).json({ error: { message: 'Not found' } })
})

router.patch('/:id', (req, res, next) => {
    const pokemon = data.pokemon.find(p => p.id == req.params.id)
    if (pokemon) {
        let pokemonData = fs.readFileSync('./api/data/pokemon.json', 'utf8')
        pokemonData = JSON.parse(pokemonData)
        pokemonData.pokemon[parseInt(req.params.id) - 1].favorite = req.body.favorite
        fs.writeFileSync('./api/data/pokemon.json', JSON.stringify(pokemonData))
        let updatedPokemon = pokemonData.pokemon[parseInt(req.params.id) - 1]
        return res.status(200).json(updatedPokemon)
    }
})

module.exports = router
