const express = require('express')

const db = require('../db/users')
const dbAnimals = require('../db/animals')

const router = express.Router()

router.get('/', (req, res) => {
    db.getUsers()
        .then(users => res.json(users))
})

// router.get('/:id', (req,res) => {
//     db.getUserByID(req.params.id)
//     .then(user => res.json(user))
// })

router.get('/:id/animals', (req, res) => {
    let userId = req.params.id;
    db.getAnimalsByUserId(userId)
        .then(aniarr => res.json(aniarr))
})

router.get('/:id/inventory', (req, res) => {
    let userId = req.params.id;
    db.getInventoryByUserId(userId)
        .then(arr => res.json(arr))
})

router.post('/:id/inventory', (req, res) => {
    let id = req.params.id;
    let formData = req.body.map(obj => {
        obj.userId = id
        return obj
    })

    db.postInventoryToUserId(formData)
        .then(() => {
            db.getInventoryByUserId(id)
                .then(chars => res.json(chars))
        })
})

router.get('/:id/charities', (req, res) => {
    let userId = req.params.id;
    db.getCharitiesByUserId(userId)
        .then(arr => res.json(arr))
})


router.post('/:id/charities', (req, res) => {
    let id = req.params.id;
    let formData = req.body.map(obj => {
        obj.userId = id
        return obj
    })
    db.postCharitiesToUserId(formData)
        .then(() => {
            db.getCharitiesByUserId(id)
                .then(chars => {
                    res.json(chars)
                })
        })
    //Need to remove join table and user id from response
})

router.post('/:id/animals', (req, res) => {
    let id = req.params.id;
    let formData = req.body.map(obj => {
        obj.userId = id
        return obj
    })
    db.postAnimalsToUserId(formData)
        .then(() => {
            db.getAnimalsByUserId(id)
                .then(chars => res.json(chars))

        })
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