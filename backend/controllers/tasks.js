const tasksRouter = require('express').Router()
const Task = require('../models/task')

tasksRouter.get('/', async (request, response) => {
  const tasks = await Task.find({})

  response.json(tasks)
})

tasksRouter.post('/', async (request, response) => {
  const body = request.body

  const task = new Task({
    jobNumber: body.jobNumber,
    jobKind: body.jobKind,
    timeStart: body.timeStart,
    timeEnd: body.timeEnd,
    date: body.date
  })

  const savedTask = await task.save()

  response.json(savedTask.toJSON())
})

module.exports = tasksRouter