import React, { useState, useEffect } from 'react'
import axios from 'axios'

const JobNumber = (props) => {
  const [ jobNumber, setJobNumber ] = useState('')

  const handleJobNumber = (event) => {
    event.preventDefault()
    console.log(jobNumber)
  }

  return (
    <td class="py-3 px-6 text-left whitespace-nowrap">
      <div class="flex items-center">
        <div class="mr-2">
      </div>
      <form onSubmit={handleJobNumber}>
        <input type="text" value={jobNumber} name="Job Number" onChange={({ target }) => setJobNumber(target.value)} />
      </form>
      </div>
    </td>
  )
}

const JobKind = (props) => {
  const [jobKind, setJobKind] = useState('')

  const handleJobKind = (event) => {
    event.preventDefault()
    console.log(jobKind)
  } 

  return (
    <td class="py-3 px-6 text-left whitespace-nowrap">
      <div class="flex items-center">
        <div class="mr-2">
      </div>
      <form onSubmit={handleJobKind}>
        <input type="text" value={jobKind} name="Job Number" onChange={({ target }) => setJobKind(target.value)} />
      </form>
      </div>
    </td>
  )
}

const TimeStart = () => {
  const [ timeStart, setTimeStart ] = useState('')

  const handleTimeStart = (event) => {
    event.preventDefault()
    console.log(timeStart)
  }

  return (
    <td class="py-3 px-6 text-left whitespace-nowrap">
      <div class="flex items-center">
        <div class="mr-2">
      </div>
      <form onSubmit={handleTimeStart}>
        <input type="text" value={timeStart} name="Time Start" onChange={({ target }) => setTimeStart(target.value)} />
      </form>
      </div>
    </td> 
  )
}

const TimeEnd = () => {
  const [ timeEnd, setTimeEnd ] = useState('')

  const handleTimeEnd = (event) => {
    event.preventDefault()
    console.log(timeEnd)
  }

  return (
    <td class="py-3 px-6 text-left whitespace-nowrap">
      <div class="flex items-center">
        <div class="mr-2">
      </div>
      <form onSubmit={handleTimeEnd}>
        <input type="text" value={timeEnd} name="Time End" onChange={({ target }) => setTimeEnd(target.value)} />
      </form>
      </div>
    </td>
  )
}

const Date = () => {
  const [ date, setDate ] = useState('')

  const handleDate = (event) => {
    event.preventDefault()
    console.log(date)
  }

  return (
    <td class="py-3 px-6 text-left whitespace-nowrap">
      <div class="flex items-center">
        <div class="mr-2">
      </div>
      <form onSubmit={handleDate}>
        <input type="text" value={date} name="Date" onChange={({ target }) => setDate(target.value)} />
      </form>
      </div>
    </td> 
  )
}

const Job = (props) => {
  return (
    <tr class="border-b border-gray-200 hover:bg-gray-100">
      <JobNumber />
      <JobKind />
      <TimeStart />
      <TimeEnd />
      <Date />
    </tr>
  )
}

export default Job