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
    // db.getUserByID(req.params.id)
    // .then(userId =>{
    //     res.json(userId)
    // })
    let userId = req.params.id;
    db.getAnimalsbyUserId(userId)
        .then(aniarr => res.json(aniarr))
} )
  

// put routes here

module.exports = router