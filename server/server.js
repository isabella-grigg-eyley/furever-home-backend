const path = require('path')
const express = require('express')
const userRoutes = require('./routes/user')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use('/api/user', userRoutes)




module.exports = server
