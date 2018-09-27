const express = require('express')

const db = require('../db/store')


const router = express.Router()

router.get('/', (req,res) => {
    // db.getStore()
    // .then(elements => res.json(elements))
    db.getStore().then(mes => console.log(mes))
      })


  

// put routes here

module.exports = router