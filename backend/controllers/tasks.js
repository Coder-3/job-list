const tasksRouter = require('express').Router()
const Task = require('../models/task')

tasksRouter.get('/', async (request, response) => {
  const tasks = await Task.find({})

  response.json(tasks)
})

tasksRouter.get('/:id', async (request, response) => {
  const task = await Task.findById(request.params.id)
  
  if (task) {
    response.json(task.toJSON())
  } else {
    response.status(404).end()
  }
})

tasksRouter.post('/', async (request, response) => {
  const body = request.body

  const task = new Task({
    jobNumber: body.jobNumber,
    jobLink: body.jobLink,
    dueDate: body.dueDate,
    maxHours: body.maxHours,
    assignee: body.assignee,
    description: body.description,
    status: body.status
  })

  const savedTask = await task.save()

  response.json(savedTask.toJSON())
})

tasksRouter.delete('/:id', async (request, response) => {
  await Task.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

tasksRouter.put('/:id', async (request, response) => {
  const body = request.body

  const task = {
    jobNumber: body.jobNumber,
    jobLink: body.jobLink,
    dueDate: body.dueDate,
    maxHours: body.maxHours,
    assignee: body.assignee,
    description: body.description,
    status: body.status
  }

  const updatedTask = await Task.findByIdAndUpdate(request.params.id, task, { new: true })

  response.json(updatedTask.toJSON())
})

module.exports = tasksRouter