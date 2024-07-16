import React from 'react'
import Sidebar from './_components/Sidebar'
import DashboardHeader from './_components/DashboardHeader'

function layout({children}) {
  return (
    <div>
    <div className='hidden md:block md:w-64 border-r border-r-slate-100 h-screen fixed'>
    <Sidebar/>
    </div>
     <div className='md:ml-64'>
     <DashboardHeader />
     {children}
     </div>
     
    </div>
  )
}

export default layout
