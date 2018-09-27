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

router.get('/:id/charities', (req,res) => {
    let userId = req.params.id;
    db.getCharitiesByUserId(userId)
    .then(arr => res.json(arr))
})


router.post('/:id/charities', (req, res) =>{
    let id = req.params.id;
    let formData = req.body.map(obj => {
        obj.userId = id
        return obj
    })


    console.log(formData);
    
    db.postCharitiesToUserId(formData)
    .then(arr => res.json(arr) )
})

// function doStuff () {
//     let arr = [];
//     arr.push(getAnimalsByUserId())
//     arr.push(getInventoryByUserId())
//     arr.push(getCharitiesByUserId())
//     Promise.all(arr)
//         .then(blah)
// }



// router.post('/:id/inventory', (req,res) => {
//     db.addCosmetics(req.params.id)
    
// })

module.exports = router