import React, { useState, useEffect } from 'react'
import Job from './components/Job'

const App = () => {
  return (
    <div class="overflow-x-auto">
      <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
        <div class="w-full lg:w-5/6">
          <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th class="py-3 px-6 text-left">Job Number</th>
                  <th class="py-3 px-6 text-left">Job Kind</th>
                  <th class="py-3 px-6 text-center">Time Start</th>
                  <th class="py-3 px-6 text-center">Time End</th>
                  <th class="py-3 px-6 text-center">Date</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <Job />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
