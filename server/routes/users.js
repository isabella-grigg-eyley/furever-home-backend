const express = require('express')

const db = require('../db/users')
const dbAnimals = require('../db/animals')

const router = express.Router()

router.get('/', (req,res) => {
    db.getUsers()
    .then(users => res.json(users))
      })

// router.get('/:id', (req,res) => {
//     db.getUserByID(req.params.id)
//     .then(user => res.json(user))
// })

router.get('/:id/animals', (req,res) =>{
    let userId = req.params.id;
    db.getAnimalsByUserId(userId)
        .then(aniarr => res.json(aniarr))
} )
  
router.get('/:id/inventory', (req,res) => {
    let userId = req.params.id;
    db.getInventoryByUserId(userId)
    .then(arr => res.json(arr))
})

module.exports = router