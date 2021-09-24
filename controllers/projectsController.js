const express = require('express')
const router = express.Router()
const Projects= require('../models/project.js')

// index route
router.get('/', (req, res) => { // request line, then response is what follows
  // res.render('index.ejs')
   try {
    Projects.find({}, (error, allProjects) => {
       // console.log(allProjects)
      error ? res.send(error) : res.render('index.ejs', {
            project: allProjects,
          })
    })
  } catch (error) {
    res.send(error.message)
   }
})

// new route
router.get('/new', (req, res) => {
  res.render('new.ejs')
})

// show route
router.get('/:id', (req, res) => {
  // console.log(req.params.id) gives the id in the terminal for the item selected.
  Projects.findById(req.params.id, (error, foundProject) => {
    // console.log(foundProject)
    res.render('show.ejs', { project: foundProject })
  })

  // })
  // Issue I think is here, accessing nested sub document?
  // Projects.find({
  //   internalContacts: {}

  // })
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
