import React from "react";
import KanbanBoard from "./_components/KanbanBoard";

const Task = () => {
  return (
    <div className=" bg-blue-50 max-h-screen overflow-x-hidden  py-6 rounded-xl">
      <KanbanBoard />
    </div>
  );
};

export default Task;
