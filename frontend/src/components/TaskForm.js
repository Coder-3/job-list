import React, { useState } from 'react'

const TaskForm = ({ createTask }) => {
  const [jobNumber, setJobNumber] = useState('')
  const [jobKind, setJobKind] = useState('')
  const [timeStart, setTimeStart] = useState('')
  const [timeEnd, setTimeEnd] = useState('')
  const [date, setDate] = useState('')

  const addTask = (event) => {
    event.preventDefault()

    createTask({
      jobNumber: jobNumber,
      jobKind: jobKind,
      timeStart: timeStart,
      timeEnd: timeEnd,
      date: date,
    })

    setJobNumber('')
    setJobKind('')
    setTimeStart('')
    setTimeEnd('')
    setDate('')
  }

  return (
    <>
      <form onSubmit={addTask} >
        <table className="min-w-max w-full table-auto">
          <tbody className="text-gray-600 text-sm font-light">
          <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <div className="mr-2">
          </div>
            <input type="text" value={jobNumber} name="Job Number" onChange={({ target }) => setJobNumber(target.value)} />
          </div>
        </td>
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <div className="mr-2">
          </div>
          <input type="text" value={jobKind} name="Job Number" onChange={({ target }) => setJobKind(target.value)} />
          </div>
        </td>
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <div className="mr-2">
          </div>
          <input type="text" value={timeStart} name="Time Start" onChange={({ target }) => setTimeStart(target.value)} />
          </div>
        </td>
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <div className="mr-2">
          </div>
          <input type="text" value={timeEnd} name="Time End" onChange={({ target }) => setTimeEnd(target.value)} />
          </div>
        </td>
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <div className="mr-2">
          </div>
          <input type="text" value={date} name="Date" onChange={({ target }) => setDate(target.value)} />
          </div>
        </td>
        </tr>
          </tbody>
        </table>
        
      </form>
    </>
  )
}

export default TaskForm