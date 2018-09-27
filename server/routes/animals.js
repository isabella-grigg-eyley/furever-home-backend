const express = require('express')

const db = require('../db/animals')

const router = express.Router()

router.get('/', (req,res) => {
    db.getAnimals()
    .then(animals => res.json(animals))
      })

router.get('/:id', (req,res) => {
    db.getAnimalsById(req.params.id)
    .then(animal => res.json(animal))
})

  

// put routes here

module.exports = router