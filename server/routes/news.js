const express = require('express')

const db = require('../db/news')

const router = express.Router()

router.get('/', (req,res) => {
    db.getNews()
    .then(news => res.json(news))
      })

  

// put routes here

module.exports = router