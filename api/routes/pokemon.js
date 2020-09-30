const express = require('express')
const router = express.Router()
const data = require('../data/pokemon.json')

router.get('/', (req, res, next) => {
    const pokemon = data.pokemon.map(({ id, url, sprite }) => { return { id, url, sprite } })
    if (pokemon) return res.status(200).json(pokemon)
    return res.status(404).json({ error: { message: 'Not found' } })
})

router.get('/:id', (req, res, next) => {
    const pokemon = data.pokemon.find(p => p.id == req.params.id)
    if (pokemon) return res.status(200).json(pokemon)
    return res.status(404).json({ error: { message: 'Not found' } })
})

router.post('/:id', (req, res, next) => {

    let test = JSON.stringify(req.body)
    console.log(test)
    return res.status(200).json({status:'ok'})
    // return res.json({ status: 'ok' })
    // // const pokemon = data.pokemon.find(p => p.id == req.params.id)
    // // if(pokemon){
    // //     console.log(req.body)
    // //     // fs.writeFileSync('../api/data/pokemon.json')
    // // }
    // return res.status(404).json({ error: { message: 'Not found' } })

})

module.exports = router
