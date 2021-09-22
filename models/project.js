const mongoose = require('mongoose')
const { Schema, model } = mongoose

const projectsSchema = new Schema({
  projectName: { type: String, required: true },
  projectDescription: { type: String },
  dateSubmitted: { type: Date },
  datePlaced: { type: Date },
  firmName: { type: String },
  //   introductionsMade: { type: Boolean, default: false },
  //   internalContacts: [
  //     {
  //       associateName: { type: String },
  //       email: { type: String },
  //       phoneNumber: { type: Number },
  //       title: { type: String },
  //     },
  //   ],
  //   externalContacts: [
  //     {
  //       associateName: { type: String },
  //       email: { type: String },
  //       phoneNumber: { type: Number },
  //       title: { type: String },
  //     },
  //   ],
  //   projectStatus: { type: String, required: true },
  //   legalAgreement: { type: String },
  //   thankYouLetter: { type: String },
})

const Projects = model('Projects', projectsSchema)

module.exports = Projects