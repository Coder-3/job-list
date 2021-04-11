const peopleRouter = require('express').Router()
const Person = require('../models/person')

peopleRouter.get('/', async (request, response) => {
  const people = Person.find({})

  response.json(people)
})

peopleRouter.post('/', async (request, response) => {
  const body = request.body

  const person = new Person({
      name: body.name,
      department: body.department
  })

  const savedPerson = await person.save()

  response.json(savedPerson.toJSON())
})

module.exports = peopleRouter