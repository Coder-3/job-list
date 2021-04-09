import React, { useState } from 'react'
import taskService from '../services/tasks'

const JobNumber = ({ jobNumber }) => {
  return (
    <td className="py-3 px-6 text-left whitespace-nowrap">
      <div className="flex items-center">
        <div className="mr-2">
      </div>
      <p>{jobNumber}</p>
      </div>
    </td>
  )
}

const JobKind = ({ jobKind }) => {
  // const [jobKind, setJobKind] = useState('')

  // const handleJobKindChange = (event) => {
  //   event.preventDefault()

  //   taskService
  //     .update()
  // }
  return (
    <td className="py-3 px-6 text-left whitespace-nowrap">
      <div className="flex items-center">
        <div className="mr-2">
      </div>
      {/* <input type="text" onBlur={}>{jobKind}</p> */}
      <p>{jobKind}</p>
      </div>
    </td>
  )
}

const TimeStart = ({ timeStart }) => {
  return (
    <td className="py-3 px-6 text-left whitespace-nowrap">
      <div className="flex items-center">
        <div className="mr-2">
      </div>
      <p>{timeStart}</p>
      </div>
    </td> 
  )
}

const TimeEnd = ({ timeEnd }) => {
  return (
    <td className="py-3 px-6 text-left whitespace-nowrap">
      <div className="flex items-center">
        <div className="mr-2">
      </div>
      <p>{timeEnd}</p>
      </div>
    </td>
  )
}

const Date = ({ date }) => {
  return (
    <td className="py-3 px-6 text-left whitespace-nowrap">
      <div className="flex items-center">
        <div className="mr-2">
      </div>
      <p>{date}</p>
      </div>
    </td>
  )
}

const Job = ({ jobNumber, jobKind, timeStart, timeEnd, date }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <JobNumber jobNumber={jobNumber} />
      <JobKind jobKind={jobKind} />
      <TimeStart timeStart={timeStart} />
      <TimeEnd timeEnd={timeEnd} />
      <Date date={date} />
    </tr>
  )
}

export default Job