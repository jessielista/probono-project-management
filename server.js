const express = require('express')
const app = express()
const PORT = 3000

const methodOveride = require('method-override')
const mongoose = require('mongoose')

require('dotenv').config()
const mongoURI = process.env.mongoURI
const db = mongoose.connection // This fires off/start the connection 

const Projects = require('./models/project.js')

// mongoose.connect is what is we need to connect to the locally hosted database, which is mongoURI and we stored that in the .env, but it could be stored here in server.js
mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('database connected')
  }
)

// This feedback for the database (db) connection. Above is where I created the constant db, which = mongoose.connection.
db.on('error', (error) => {
  console.log('ERROR: ', error)
})
db.on('connected', () => {
  console.log('mongo connected')
})
db.on('disconnected', () => {
  console.log('mongo disconnected')
})

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(methodOveride('_method'))

const projectsController = require('./controllers/projectsController')
app.use('/probono', projectsController)

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})