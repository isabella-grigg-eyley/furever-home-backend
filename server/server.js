// const path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
// const cors = require('cors');

const usersRoute  = require('./routes/users')
const animalsRoutes = require('./routes/animals')
const eventsRoutes = require('./routes/events')
const newsRoutes = require('./routes/news')
const storeRoutes = require('./routes/store')
const server = express()

server.use(bodyParser.json())
// server.use(cors('*'));

server.use(express.json())
// server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/users', usersRoute)
server.use('/api/events', eventsRoutes)
server.use('/api/news', newsRoutes)
server.use('/api/animals', animalsRoutes)
server.use('/api/store', storeRoutes)



module.exports = server
