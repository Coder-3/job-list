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
        <div className="flex item-center justify-center">
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
        </div>
      </td>
    </tr>
  )
}

const App = () => {
  const [jobs, setJobs] = useState([])
  const [jobNumber, setJobNumber] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [maxHours, setMaxHours] = useState('')
  const [assignee, setAssignee] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    jobService
      .getAll()
      .then(initialJobs => {
        setJobs(initialJobs)
      })
  }, [])

  const addJob = (event) => {
    event.preventDefault()
    
    const jobObject = {
      jobNumber: jobNumber,
      dueDate: dueDate,
      maxHours: maxHours,
      assignee: assignee,
      description: description,
      status: status
    }

    jobService
      .create(jobObject)
      .then(returnedJob => {
        setJobs(jobs.concat(returnedJob))
      })
  }

  const addJobForm = () => (
    <form onSubmit={addJob} className="form">
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={jobNumber} onChange={(event) => setJobNumber(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={dueDate} onChange={(event) => setDueDate(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={maxHours} onChange={(event) => setMaxHours(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={assignee} onChange={(event) => setAssignee(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={description} onChange={(event) => setDescription(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 mr-4 rounded-lg focus:border-gray-700" value={status} onChange={(event) => setStatus(event.target.value)}/>
      <button type="submit" className="px-4 py-2 text-sm font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">Submit</button>
    </form>
  )

  return (
    <>
      <div className="container">
        {addJobForm()}
      </div>
      <div className="container">
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
      </div>
    </>
  )
}

export default App
