const mongoose = require('mongoose')
const { Schema, model } = mongoose
const Contact = require('./contact')

const projectsSchema = new Schema({
  projectName: { type: String },
  projectDescription: { type: String },
  dateSubmitted: { type: String, default: Date },
  datePlaced: { type: String, default: Date },
  firmName: { type: String },
  introductionsMade: {
    type: String,
    enum: ['yes', 'no', 'soon'],
    default: 'no',
  },
  projectStatus: {
    type: String,
    enum: ['current', 'available', 'complete'],
  },
  contactPerson: [Contact.schema],
  legalAgreement: { type: String },
  thankYouLetter: { type: String },
})

const Projects = model('Projects', projectsSchema)

module.exports = Projects