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


router.get('/:id/inventory', (req,res) => {
    let animalId = req.params.id;
    db.getInventoryByAnimalId(animalId)
    .then(arr => res.json(arr))
})

router.post('/:id/inventory', (req, res) =>{
    let id = req.params.id;
    let formData = req.body
   
    db.deleteAnimalandInventory(id).then(()=>
    
    (db.postInventoryToAnimalId(formData)
    .then(() => {
        db.getInventoryByAnimalId(id)
        .then(chars => res.json(chars))
    })))

})

  

// put routes here

module.exports = router