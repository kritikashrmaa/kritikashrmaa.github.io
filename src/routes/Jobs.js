import React from 'react'
import { jobsData } from '../components/Items'
import JobComp from '../components/Jobs/JobComp'


const Jobs = () => {
  return (
    <div>
      {jobsData.map((job, index) => (
        <JobComp key={index} {...job} />
      ))}
    </div>
  )
}

export default Jobs
