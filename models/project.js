const mongoose = require('mongoose')
const { Schema, model } = mongoose

const projectsSchema = new Schema({
  projectName: { type: String },
  projectDescription: { type: String },
  dateSubmitted: { type: String, default: Date },
  datePlaced: { type: String, default: Date },
  firmName: { type: String },
  introductionsMade: {
    // need to connect to show page
    type: String,
    enum: ['yes', 'no', 'soon'],
    default: 'no',
  },
  projectStatus: {
    type: String,
    enum: ['current', 'available', 'complete'],
  },
  staffPerson: { type: String },
  // turn into an array with all the info.
  staffEmail: { type: String },
  legalAgreement: { type: String },
  thankYouLetter: { type: String },
})

const Projects = model('Projects', projectsSchema)

module.exports = Projects