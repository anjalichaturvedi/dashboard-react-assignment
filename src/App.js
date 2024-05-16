// App.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboards';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (option) => {
    setSelectedOption(option);
    // You can add logic to navigate to different pages or render different components based on the selected option
  }

  return (
    <div className="app">
      < Dashboard/>
    </div>
  );
}

export default App;
