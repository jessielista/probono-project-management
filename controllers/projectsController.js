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

// post route
router.post('/', (req, res) => {
    Projects.create(req.body, (error, createdProjects) => {
    res.redirect('/probono')
        console.log(createdProjects)

    })
})

module.exports = router