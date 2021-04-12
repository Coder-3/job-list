import React, { useState, useEffect } from 'react'
import jobService from './services/jobs'

const Job = ({ jobNumber, dueDate, maxHours, assignee, description, status }) => {
  return (
    <tr>
      <td>{jobNumber}</td>
      <td>{dueDate}</td>
      <td>{maxHours}</td>
      <td>{assignee}</td>
      <td>{description}</td>
      <td>{status}</td>
      <td>
        <div class="flex item-center justify-center">
          <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
        </div>
      </td>
    </tr>
  )
}

const App = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    jobService
      .getAll()
      .then(initialJobs => {
        setJobs(initialJobs)
      })
  }, [])

  const addJob = (jobObject) => {
    jobService
      .create(jobObject)
      .then(returnedJob => {
        setJobs(jobs.concat(returnedJob))
        set
      })
  }

  const addJobForm = () => (
    <form onSubmit={addJob}>

    </form>
  )

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Job Number</th>
            <th>Due Date</th>
            <th>Max Hours</th>
            <th>Assignee</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job =>
            <Job
              key={job.id}
              jobNumber={job.jobNumber}
              dueDate={job.dueDate}
              maxHours={job.maxHours}
              assignee={job.assignee}
              description={job.description}
              status={job.status}
            />
          )}
        </tbody>
      </table>
    </>
  )
}

export default App
