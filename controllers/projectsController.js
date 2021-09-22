const express = require('express')
const router = express.Router()
const Projects = require('../models/projects.js')

// index
router.get('/', (req, res) => {
  res.render('index.ejs')
})

// new
router.get('/new', (req, res) => {
  res.render('new.ejs')
})

// show route
router.get('/:id', (req, res) => {
    res.render('show.ejs')
  })

  // edit route
router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs')
		})





module.exports = router