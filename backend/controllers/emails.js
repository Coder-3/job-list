const emailRouter = require('express').Router()
const Task = require('../models/task')
const config = require('../utils/config')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(config.SENDGRID_API)

emailRouter.post('/', async (request, response) => {
  const assignees = request.body
  
  const tasksPerAssigneePromises = assignees.map(async assignee => {
    if(assignee.label !== 'All') {
      return {
        assignee: assignee.label,
        tasks: await Task.find({ assignee: assignee })
      }
    }
  })

  const tasksPerAssignee = await Promise.all(tasksPerAssigneePromises)

  // console.log(tasksPerAssignee.map(d => !d ? null : d.assignee))
  // console.log(tasksPerAssignee)

  response.json(tasksPerAssignee)

  sendJobList(tasksPerAssignee)
})

const sendJobList = (data) => {
  const cedricsTasks = data.map(obj => {
    if (obj.assignee === 'Cédric') {
      return obj.tasks
    }
  })

  // console.log('cedrics tasks', cedricsTasks[0])
  const content = `
    <h1>Cédric</h1>
    <div style="background-color: white; padding-top: 3rem; display: flex; align-items: center; justify-content: center;">
      <div style="width: 100%; padding-bottom: 20rem;">
        <table style="width: 100%; table-layout: auto;">
          <thead style="background-color: #E4E7EB; text-transform: uppercase; font-size: 0.875rem; line-height: 1.5rem">
            <tr>
              <th>Job Number</th>
              <th>Due Date</th>
              <th>Max Hours</th>
              <th>Assignees</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody style="font-size: 0.875rem; font-weight: 300;">
            ${cedricsTasks[0].map(task => {
              return `
                <tr>
                  <td style="padding: 0.75rem 1.5rem; text-align: left; white-space: nowrap;"><a href="${task.jobLink}">${task.jobNumber}</a></td>
                  <td style="padding: 0.75rem 1.5rem; text-align: left; white-space: nowrap;">${task.dueDate}</td>
                  <td style="padding: 0.75rem 1.5rem; text-align: left; white-space: nowrap;">${task.maxHours}</td>
                  <td style="padding: 0.75rem 1.5rem; text-align: left; white-space: nowrap;">${task.assignee.map(a => a.label)}</td>
                  <td style="padding: 0.75rem 1.5rem; text-align: left; overflow-wrap: normal; word-break: normal; max-width: 24rem;">${task.description}</td>
                </tr>
              `
            })}
          </tbody>
        </table>
      </div>
    </div>
  `

  console.log(content)

  const msg = {
    to: 'cedric@hbk.com.au',
    // to: ['cedric@hbk.com.au', 'dora@hbk.com.au', 'kelly@hbk.com.au', 'lukec@hbk.com.au', 'mihir@hbk.com.au', 'vera@hbk.com.au', 'simon@hbk.com.au', 'cynthia@hbk.com.au', 'luke@hbk.com.au'],
    from: {
      name: 'Cédric',
      email: 'cedric@hbk.com.au',
    },
    subject: `Job List: ${new Date(Date.now()).toDateString()}`,
    html: content
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