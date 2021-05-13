const emailRouter = require('express').Router()
const Task = require('../models/task')
const config = require('../utils/config')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(config.SENDGRID_API)

emailRouter.post('/', async (request, response) => {
  const assignees = request.body
  
  const tasksPerAssigneePromises = assignees.map(assignee => Task.find({ assignee: assignee }))

  const tasksPerAssignee = await Promise.all(tasksPerAssigneePromises)

  sendJobList(tasksPerAssignee)
})

const sendJobList = (data) => {
  const msg = {
    to: 'cedric@hbk.com.au',
    // to: ['cedric@hbk.com.au', 'dora@hbk.com.au', 'kelly@hbk.com.au', 'lukec@hbk.com.au', 'mihir@hbk.com.au', 'vera@hbk.com.au', 'simon@hbk.com.au', 'cynthia@hbk.com.au', 'luke@hbk.com.au'],
    from: {
      name: 'Cédric',
      email: 'cedric@hbk.com.au',
    },
    subject: `Job List ${new Date(Date.now()).toDateString()}`,
    text: `${data}`,
    html: `<p>${data}</p>`,
  };

  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      logger.error(error);
  
      if (error.response) {
        logger.error(error.response.body)
      }
    }
  })();
}

module.exports = emailRouter