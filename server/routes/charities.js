const express = require('express')

const db = require('../db/charities')

const router = express.Router()

router.get('/all', (req,res) => {
    db.getCharities()
    .then(charities => res.json(charities))
      })

      module.exports = router