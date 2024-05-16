// Dashboard.jsx
import React from 'react';
import SummaryStats from './SummaryStats';
import Graph from './Graph';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="summary-stats">
        <SummaryStats />
      </div>
      <div className="graph">
        <Graph />
      </div>
    </div>
  );
}

export default Dashboard;
