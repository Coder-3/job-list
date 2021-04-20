import React, { useState, useEffect } from 'react'
import jobService from './services/jobs'

const EditJobForm = ({ id, editFormHidden, editFormHide, editSuccess }) => {
  console.log(id)
  const [jobNumber, setJobNumber] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [maxHours, setMaxHours] = useState('')
  const [assignee, setAssignee] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    jobService
      .getTask(id)
      .then(task => {
        console.log(task)
        setJobNumber(task.jobNumber)
        setDueDate(task.dueDate)
        setMaxHours(task.maxHours)
        setAssignee(task.assignee)
        setDescription(task.description)
        setStatus(task.status)
      })
  }, [])

  if (editFormHidden === true) {
    return null
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

    jobService
    .update(id, jobObject)
    .then(returnedJob => {
      clearState()
      editSuccess(jobObject)
      editFormHide()
    })
  }

  return (
    <form onSubmit={handleJob} className="form">
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={jobNumber} onChange={(event) => setJobNumber(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={dueDate} onChange={(event) => setDueDate(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={maxHours} onChange={(event) => setMaxHours(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={assignee} onChange={(event) => setAssignee(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={description} onChange={(event) => setDescription(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 mr-4 rounded-lg focus:border-gray-700" value={status} onChange={(event) => setStatus(event.target.value)}/>
      <button type="submit" className="px-4 py-2 text-sm font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 mr-2">Submit</button>
      <button onClick={() => {editFormHide(); clearState()}} className="px-4 py-2 text-sm font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">Cancel</button>
    </form>
  )
}

const AddJobForm = ({ addFormHidden, addFormHide, addSuccess }) => {
  const [jobNumber, setJobNumber] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [maxHours, setMaxHours] = useState('')
  const [assignee, setAssignee] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')

  if (addFormHidden === true) {
    return null
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

    jobService
      .create(jobObject)
      .then(returnedJob => {
        clearState()
        addSuccess(jobObject)
        addFormHide()
    })
  }

  return (
    <form onSubmit={handleJob} className="form">
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={jobNumber} onChange={(event) => setJobNumber(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={dueDate} onChange={(event) => setDueDate(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={maxHours} onChange={(event) => setMaxHours(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={assignee} onChange={(event) => setAssignee(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 rounded-lg focus:border-gray-700" value={description} onChange={(event) => setDescription(event.target.value)}/>
      <input type="text" className="bg-gray-200 border-2 border-gray-300 bg-gray-100 mx-1 mr-4 rounded-lg focus:border-gray-700" value={status} onChange={(event) => setStatus(event.target.value)}/>
      <button type="submit" className="px-4 py-2 text-sm font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 mr-2">Submit</button>
      <button onClick={() => {addFormHide(); clearState()}} className="px-4 py-2 text-sm font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">Cancel</button>
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
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-5 pt-1" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg>
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
  const [message, setMessage] = useState(null)
  const [isAddFormHidden, setIsAddFormHidden] = useState(true)
  const [isEditFormHidden, setIsEditFormHidden] = useState(true)
  const [isButtonHidden, setIsButtonHidden] = useState(false)
  const [jobId, setJobId] = useState('')


  useEffect(() => {
    jobService
      .getAll()
      .then(initialJobs => {
        setJobs(initialJobs)
      })
  }, [])

  const hideAddForm = () => {
    setIsAddFormHidden(true)
    setIsButtonHidden(false)
  }

  const hideEditForm = () => {
    setIsEditFormHidden(true)
    setIsButtonHidden(false)
  }

  const addSuccess = (jobObject) => {
    setJobs(jobs.concat(jobObject))
    setMessage('Successfully added job')
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const editSuccess = (jobObject) => {
    console.log(jobObject)
    
    const newJobs = jobs

    const jobObjectId = jobs.findIndex(job => job.id === jobObject.id)


    newJobs[jobObjectId] = jobObject

    setJobs(newJobs)

    setMessage('Successfully edited the job')
    setTimeout(() => {
      setMessage(null)
    }, 3000)
  }

  const deleteJob = (id) => {
    jobService
      .remove(id)
      .then(returnedJob => {
        setJobs(jobs.filter(job => job.id !== id))
      })
  }

  const addJob = () => {
    setIsButtonHidden(true)
    setIsAddFormHidden(false)
  }

  const editForm = () => {
    if (!isEditFormHidden) {
      return (
        <EditJobForm id={jobId} editFormHidden={isEditFormHidden} editFormHide={hideEditForm} editSuccess={editSuccess} />
      )
    } else {
      return null
    }
  }

  const editJob = (id) => {
    setIsButtonHidden(true)
    setIsEditFormHidden(false)
    setJobId(id)
  }

  return (
    <>
      <div className="container">
        {editForm()}
        <AddJobForm addFormHidden={isAddFormHidden} addFormHide={hideAddForm} addSuccess={addSuccess} />
        <button onClick={addJob} className="px-4 py-2 text-sm font-semibold tracking-wider border-2 border-gray-300 rounded hover:bg-gray-200 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300" hidden={isButtonHidden}>Add Job</button>
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
                jobId = {job.id}
                jobNumber={job.jobNumber}
                dueDate={job.dueDate}
                maxHours={job.maxHours}
                assignee={job.assignee}
                description={job.description}
                status={job.status}
                deleteJob={() => deleteJob(job.id)}
                editJob={() => editJob(job.id)}
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
