const express = require('express')
const app = express()
const PORT = 3000

const methodOverride = require('method-override')
const mongoose = require('mongoose')

require('dotenv').config()
const mongoURI = process.env.mongoURI
const db = mongoose.connection

const Products = require('./models/projects')


app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})