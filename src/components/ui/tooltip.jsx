import React from 'react';

const Tooltip = ({ percentage, visible }) => {
  return (
    <div
      className={`absolute bg-black text-white text-xs rounded py-1 px-2 z-10 transition-opacity duration-200 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transform: 'translateY(-100%)' }} // Adjust position as needed
    >
      {percentage}% Complete
    </div>
  );
};

export default Tooltip;
