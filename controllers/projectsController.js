const express = require('express')
const router = express.Router()
const Projects= require('../models/project.js')

// index route
router.get('/', (req, res) => {
  // res.render('index.ejs')

  Projects.find({}, (err, allProjects) => {
    // console.log(allProjects)
    res.render('index.ejs', {
      project: allProjects,
    })
  })
})

// new route
router.get('/new', (req, res) => {
  res.render('new.ejs')
})

// show route
router.get('/:id', (req, res) => {
  Projects.findById(req.params.id, (error, foundProject) => {
    // console.log(foundProject)
    res.render('show.ejs', { project: foundProject })
  })
})

// edit route
router.get('/:id/edit', (req, res) => {
  Projects.findById(req.params.id, (error, foundProject) => {
    // console.log(foundProject)
    res.render('edit.ejs', { project: foundProject })
  })
})

// update route
router.put('/:id', (req, res) => {
  Projects.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedProject) => {
      res.redirect('/probono/' + req.params.id)
      // console.log(updatedProject)
    }
  )
})

// post route
router.post('/', (req, res) => {
  Projects.create(req.body, (error, createdProject) => {
    res.redirect('/probono')
    console.log(createdProject)
  })
})

// delete route
router.delete('/:id', (req, res) => {
  Projects.findByIdAndDelete(req.params.id, (error, deletedProject) => {
    res.redirect('/probono')
  })
})

module.exports = router
