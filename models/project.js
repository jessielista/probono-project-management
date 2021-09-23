const mongoose = require('mongoose')
const { Schema, model } = mongoose

const projectsSchema = new Schema({
  projectName: { type: String, required: true },
  projectDescription: { type: String },
  dateSubmitted: { type: String, default: Date, required: true },
  datePlaced: { type: String, default: Date },
  firmName: { type: String },
  introductionsMade: { type: String },
  // internalContacts: [
  //   {
  //     associateName: { type: String },
  //     email: { type: String },
  //     phoneNumber: { type: Number },
  //     title: { type: String },
  //   },
  //   {
  //     associateName: { type: String },
  //     email: { type: String },
  //     phoneNumber: { type: Number },
  //     title: { type: String },
  //   },
  // ],
  // externalContacts: [
  //   {
  //     associateName: { type: String },
  //     email: { type: String },
  //     phoneNumber: { type: Number },
  //     title: { type: String },
  //   },
  // ],
  projectStatus: { type: String },
  legalAgreement: { type: String },
  thankYouLetter: { type: String },
})

const Projects = model('Projects', projectsSchema)

module.exports = Projects