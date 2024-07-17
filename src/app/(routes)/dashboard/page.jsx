import React from 'react'
import Attendence from "./_components/Attendence"
import MyCourse from "./_components/MyCourse"
import {SemesterResults} from "./_components/ExamSheet"
import Timeline from "./_components/TimeTable"

function page() {
  return (
    <div className='h-[90vh] flex flex-col p-5 space-y-4'>
      <div className="flex flex-col lg:flex-row gap-8 flex-1">
        <div className="flex-1 min-h-0">
          <Attendence />
        </div>
        <div className="flex-1 bg-gray-200 rounded-lg">
          <MyCourse/>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8 flex-1">
        <div className="flex-[1] bg-gray-200 rounded-lg">
          <SemesterResults/>
        </div>
        <div className="flex-1 bg-gray-200 rounded-lg">
          <Timeline/>
        </div>
        
      </div>
    </div>
  )
}

export default page