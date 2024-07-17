import React, { useState } from 'react';

const ProgressBar = ({ data }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ left: 0 });

  // Assuming data contains a property that holds the completion percentage
  const percentage = data.completionPercentage || 0;

  const handleMouseEnter = (e) => {
    setTooltipVisible(true);
    setTooltipPosition({ left: e.clientX - e.target.getBoundingClientRect().left });
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="w-44 bg-gray-200 rounded-full h-2 dark:bg-gray-700"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="bg-blue-600 h-2 rounded-full dark:bg-blue-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {tooltipVisible && (
        <div
          className="absolute bg-black text-white text-xs rounded py-1 px-2 z-10 transition-opacity duration-200 opacity-100"
          style={{ top: '-1.5rem', left: `${tooltipPosition.left}px` }}
        >
          {percentage}% Complete
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
