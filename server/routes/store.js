const express = require('express')

const db = require('../db/store')


const router = express.Router()

router.get('/cosmetics/all', getCosmetics)

function getCosmetics(req, res, next) {
  db.getCosmetics()
    .then(cosmetics => {
      res.json(cosmetics)
    })
}

module.exports = router