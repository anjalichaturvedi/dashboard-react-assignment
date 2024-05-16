import React from 'react';
import Graph from './Graph'; // Import the Graph component

const GraphData = () => {
  // Dummy data for user count vs each month
  const graphData = [
    { month: 'Jan', userCount: 100 },
    { month: 'Feb', userCount: 150 },
    { month: 'Mar', userCount: 200 },
    { month: 'Apr', userCount: 180 },
    { month: 'May', userCount: 220 },
    { month: 'Jun', userCount: 250 },
  ];

  return (
    <div className="graph-data-container">
      <h2>User Count vs Each Month</h2>
      <Graph data={graphData} /> {/* Render the Graph component with the dummy data */}
    </div>
  );
};

export default GraphData;