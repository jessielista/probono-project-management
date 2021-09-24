const express = require('express')
const router = express.Router()
const Contact = require('../models/contact.js')
const Projects = require('../models/project.js')


// index route
router.get('/', (req, res) => {
  res.render('index.ejs')
})

// new route
router.get('/new', (req, res) => {
  res.render('new.ejs')
})

// show route
router.get('/:id', (req, res) => {
  Contact.findById(req.params.id, (error, foundContact) => {
    res.render('show.ejs', { contact: foundContact })
  })
})

// post route
router.post('/', (req, res) => {
  Contact.create(req.body, (error, createdContact) => {
    res.redirect('/probono')
    console.log(createdContact)
  })
})


module.exports = router