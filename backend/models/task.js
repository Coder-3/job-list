const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  jobNumber: String,
  jobLink: String,
  dueDate: String,
  maxHours: Number,
  assignee: [],
  description: String,
  status: []
})

taskSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Task', taskSchema)