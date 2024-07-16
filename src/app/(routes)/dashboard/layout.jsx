import React from 'react'
import Sidebar from './_components/Sidebar'
import DashboardHeader from './_components/DashboardHeader'
import RightSidebar from './_components/RightSidebar'

function layout({children}) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="hidden md:block rounded-r-3xl w-64 border-r bg-sky-100 border-r-slate-100 h-full fixed left-0">
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 ml-64 max-w-[927px] ">
        <DashboardHeader />
        <div className="p-4">
          {children}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden md:block rounded-l-3xl w-64 border-l bg-sky-100 border-l-slate-100 h-full fixed right-0">
        <RightSidebar />
      </div>
    </div>
  )
}

export default layout
