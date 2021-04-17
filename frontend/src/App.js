import React, { useState, useEffect } from 'react'
import jobService from './services/jobs'

const JobForm = ({ type, id, updatedJob }) => {
  const [jobNumber, setJobNumber] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [maxHours, setMaxHours] = useState('')
  const [assignee, setAssignee] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')

  if (type === null) {
    return null
  } else if (type === 'edit') {
    setJobNumber(updatedJob.jobNumber)
    setDueDate(updatedJob.dueDate)
    setMaxHours(updatedJob.dueDate)
    setAssignee(updatedJob.assignee)
    setDescription(updatedJob.description)
    setStatus(updatedJob.status)
  }

  const clearState = () => {
    setJobNumber('')
    setDueDate('')
    setMaxHours('')
    setAssignee('')
    setDescription('')
    setStatus('')
    
    return null
  }

  const handleJob = (event) => {
    event.preventDefault()

    const jobObject = {
      jobNumber: jobNumber,
      dueDate: dueDate,
      maxHours: maxHours,
      assignee: assignee,
      description: description,
      status: status
    }

    if (type === 'add') {
      jobService
        .create(jobObject)
        .then(returnedJob => {
          clearState()
      })
    } else if (type === 'edit') {
      jobService
        .update(id, jobObject)
        .then(returnedJob => {
          clearState()
        })
    }
  }

  return (
    <form onSubmit={handleJob} className="form">
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={jobNumber} onChange={(event) => setJobNumber(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={dueDate} onChange={(event) => setDueDate(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={maxHours} onChange={(event) => setMaxHours(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={assignee} onChange={(event) => setAssignee(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={description} onChange={(event) => setDescription(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 mr-4 rounded-lg focus:border-gray-700" value={status} onChange={(event) => setStatus(event.target.value)}/>
      <button type="submit" className="px-4 py-2 text-sm font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">Submit</button>
    </form>
  )
}

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="space-x-2 bg-green-50 p-4 rounded flex items-center text-green-600 my-4 shadow-lg mx-auto max-w-2xl">
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-5 pt-1" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg>
      </div>
      <h3 className="text-green-800 tracking-wider flex-1">
        {message} 
      </h3>
    </div>
  )
}

const Job = ({ jobNumber, dueDate, maxHours, assignee, description, status, editJob, deleteJob }) => {
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
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={editJob}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={deleteJob}>
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
  const [message, setMessage] = useState(null)
  const [formType, setFormType] = useState(null)

  useEffect(() => {
    jobService
      .getAll()
      .then(initialJobs => {
        setJobs(initialJobs)
      })
  }, [])

  const handleJob = (event) => {
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
        setJobNumber('')
        setDueDate('')
        setMaxHours('')
        setAssignee('')
        setDescription('')
        setStatus('')
      })

      
      // todo: error handling
      // TODO: Disable double submitting the form
      // check if react has a single click functionality call
      // TODO: Add confirmation that the task has been completed such as a tick in the submit button or text that says added
  }

  const deleteJob = (id) => {
    jobService
      .remove(id)
      .then(returnedJob => {
        setJobs(jobs.filter(job => job.id !== id))
      })
  }

  const editJob = (id, job) => {
    setFormType('edit')

    return (
      <JobForm 
        type={formType} 
        jobNumber={job.jobNumber} 
        dueDate={job.dueDate} 
        maxHours={job.maxHours} 
        assignee={job.assignee} 
        description={job.description} 
        status={job.status} 
      />
    )
  }

  const addJob = () => {
    setFormType('add')
  }

  return (
    <>
      <div className="container">
        <button onClick={addJob}>Add Job</button>
      </div>
      <Notification message={message} />
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Job Number</th>
              <th>Due Date</th>
              <th>Max Hours</th>
              <th>Assignee</th>
              <th>Job Name</th>
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
                deleteJob={() => deleteJob(job.id)}
                editJob={() => editJob(job.id, job)}
                addJob={addJob}
              />
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
