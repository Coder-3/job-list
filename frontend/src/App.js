import React, { useState, useEffect } from 'react'
import Job from './components/Job'
import TaskForm from './components/TaskForm'
import taskService from './services/tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      jobNumber: 'adk124',
      jobKind: 'webd',
      timeStart: '12:99',
      timeEnd: '13L888',
      date: 'mm/dsaf'
    },
    {
      jobNumber: 'adk124',
      jobKind: 'webd',
      timeStart: '12:99',
      timeEnd: '13L888',
      date: 'mm/dsaf'
    },
    {
      jobNumber: 'adk124',
      jobKind: 'webd',
      timeStart: '12:99',
      timeEnd: '13L888',
      date: 'mm/dsaf'
    }
  ])
  

  // useEffect(() => {
  //   taskService
  //     .getAll()
  //     .then(initialTasks => {
  //         setTasks(initialTasks)
  //     })
  // }, [])

  const addTask = (taskObject) => {
    taskService
      .create(taskObject)
      .then(returnedTask => {
        setTasks(tasks.concat(returnedTask))
      })
  }

  const taskForm = () => (
    <TaskForm createTask={addTask} />
  )

  // const tasksToShow = () => (
  //   tasks.map(task => {
  //     <tr className="border-b border-gray-200 hover:bg-gray-100">
  //       <JobNumber jobNumber={task.jobNumber} />
  //       <JobKind jobKind={task.jobKind} />
  //       <TimeStart timeStart={task.timeStart} />
  //       <TimeEnd timeEnd={task.timeEnd} />
  //       <Date date={task.date} />
  //     </tr>
  //   })
  // )

  const testing = [
    {
      jobNumber: 'adk124',
      jobKind: 'webd',
      timeStart: '12:99',
      timeEnd: '13L888',
      date: 'mm/dsaf'
    },
    {
      jobNumber: 'adk124',
      jobKind: 'webd',
      timeStart: '12:99',
      timeEnd: '13L888',
      date: 'mm/dsaf'
    },
    {
      jobNumber: 'adk124',
      jobKind: 'webd',
      timeStart: '12:99',
      timeEnd: '13L888',
      date: 'mm/dsaf'
    }
  ]

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
                {testing.map(task =>
                  <Job
                    key={task.jobNumber}
                    jobNumber={task.jobNumber}
                    jobKind={task.jobKind}
                    timeStart={task.timeStart}
                    timeEnd={task.timeEnd}
                    date={task.date}
                  />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
