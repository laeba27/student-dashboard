import React from "react";
import Sidebar from "./_components/Sidebar";
import DashboardHeader from "./_components/DashboardHeader";
import RightSidebar from "./_components/RightSidebar";

function layout({ children }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden gap-1">
      {/* Sidebar */}
      <div className="hidden md:block rounded-r-3xl w-64 border-r bg-sky-100 border-r-slate-100 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1  w-full  overflow-hidden">
        <DashboardHeader />
        <div className="p-4">{children}</div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden md:block rounded-l-3xl w-64 border-l bg-sky-100 border-l-slate-100 h-full ">
        <RightSidebar />
      </div>
    </div>
  );
}

export default layout;
