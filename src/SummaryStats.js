// SummaryStats.jsx
import React from 'react';

const SummaryStats = () => {
  // Fetch or use dummy data for stats
  const totalUsersCount = 1000;
  const salesIn30Days = 5000;
  const conversionRate = 0.1;
  const avgTimeSpent = '2h';
  const coursesCount = 20;
  const courseCategories = ['Programming', 'Design', 'Marketing'];

  return (
    <div className="summary-stats-container">
      <h2>Summary Stats</h2>
      <p>Total Users: {totalUsersCount}</p>
      <p>30 Days Sales: ${salesIn30Days}</p>
      <p>Conversion Rate: {conversionRate * 100}%</p>
      <p>Avg Time Spent: {avgTimeSpent}</p>
      <p>Courses Count: {coursesCount}</p>
      <p>Course Categories: {courseCategories.join(', ')}</p>
    </div>
  );
}

export default SummaryStats;
