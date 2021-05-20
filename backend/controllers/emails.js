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

  response.json(tasksPerAssignee)

  sendJobList(tasksPerAssignee)
})

const sendJobList = (data) => {
  const content = `
    ${data.map(obj => {
      return `
        <h2>${obj.assignee}</h2>
        <div style="background-color: white; padding-top: 0.5rem; display: flex; align-items: center; justify-content: center;">
          <div style="width: 100%; padding-bottom: 2rem;">
            <table style="width: 100%; table-layout: auto; border: 1px solid grey;">
              <thead style="background-color: #E4E7EB; text-transform: uppercase; font-size: 0.875rem; line-height: 1.5rem">
                <tr>
                  <th>Job Number</th>
                  <th>Due Date</th>
                  <th>Max Hours</th>
                  <th>Assignees</th>
                  <th>Status</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody style="font-size: 0.875rem; font-weight: 300;">
                ${obj.tasks.map(task => {
                  const approachingDeadline = () => {
                    const dateDue = new Date(task.dueDate.toString().slice(0, 10))
                    const today = new Date()
                
                    const dayDifference = Math.ceil((dateDue - today) / (1000 * 60 * 60 * 24))
                
                    if (dayDifference < 0) {
                      return 'color: #e50000; font-weight: 700;'
                    } else if (dayDifference === 0) {
                      return 'color: #ffbf00; font-weight: 600;'
                    } else if (dayDifference === 1) {
                      return 'font-weight: 500;'
                    } else {
                      return ''
                    }
                  }

                  return `
                    <tr>
                      <td style="padding: 0.75rem 1.5rem; text-align: left; white-space: nowrap;"><a href="${task.jobLink}">${task.jobNumber}</a></td>
                      <td style="padding: 0.75rem 1.5rem; text-align: left; white-space: nowrap; ${approachingDeadline()}">${new Date(task.dueDate).toString().slice(0, 10)}</td>
                      <td style="padding: 0.75rem 1.5rem; text-align: left; white-space: nowrap;">${task.maxHours}</td>
                      <td style="padding: 0.75rem 1.5rem; text-align: left; white-space: nowrap;">${task.assignee.map(a => a.label)}</td>
                      <td style="padding: 0.75rem 1.5rem; text-align: left; white-space: nowrap;">${task.status[0].label}</td>
                      <td style="padding: 0.75rem 1.5rem; text-align: left; overflow-wrap: normal; word-break: normal; max-width: 24rem;">${task.description}</td>
                    </tr>
                  `
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>
        `
      }).join('')}
    <a href="https://aqueous-headland-44218.herokuapp.com/">Complete job list</a>
  `

  const msg = {
    // to: ['cedric@hbk.com.au', 'dora@hbk.com.au', 'kelly@hbk.com.au', 'lukec@hbk.com.au', 'mihir@hbk.com.au', 'vera@hbk.com.au', 'simon@hbk.com.au', 'cynthia@hbk.com.au', 'luke@hbk.com.au'],
    to: 'cedric@hbk.com.au',
    from: {
      name: 'Job List',
      email: 'dev@hbk.com.au',
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