const express = require('express')

const db = require('../db/events')

const router = express.Router()

router.get('/', (req,res) => {
    db.getEvents()
    .then(users => res.json(users))
      })

  

// put routes here

module.exports = router