import React, { useState, useEffect } from 'react'
import Job from './components/Job'
import TaskForm from './components/TaskForm'
import taskService from './services/tasks'

const App = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    taskService
      .getAll()
      .then(initialTasks => {
          setTasks(initialTasks)
      })
  }, [])

  const addTask = (taskObject) => {
    taskService
      .create(taskObject)
      .then(returnedTask => {
        setTasks(tasks.concat(returnedTask))
      })
  }

  const updateTask = (id, change) => {
    const task = tasks.find(t => t.id === id)
    const changedTask = {...task, change}

    taskService
      .update()
  }

  const taskForm = () => (
    <TaskForm createTask={addTask} />
  )

  const jobs = () => (
    tasks.map(task => 
      <Job
      key={task.id}
      jobNumber={task.jobNumber}
      jobKind={task.jobKind}
      timeStart={task.timeStart}
      timeEnd={task.timeEnd}
      date={task.date}
      updateTask={updateTask}
      /> 
    )
  )

  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            {taskForm()} 
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Job Number</th>
                  <th className="py-3 px-6 text-left">Job Kind</th>
                  <th className="py-3 px-6 text-left">Time Start</th>
                  <th className="py-3 px-6 text-left">Time End</th>
                  <th className="py-3 px-6 text-left">Date</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {jobs()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
