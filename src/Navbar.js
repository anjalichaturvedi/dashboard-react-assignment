// Navbar.jsx
import React from 'react';

const Navbar = ({ onSelect }) => {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => onSelect('createCourse')}>Create Course</li>
        <li onClick={() => onSelect('previewHomePage')}>Preview Home Page</li>
        <li onClick={() => onSelect('previewAfterLoginPage')}>Preview After Login Page</li>
        <li onClick={() => onSelect('viewWelcomeScreen')}>View Welcome Screen</li>
      </ul>
    </nav>
  );
}

export default Navbar;
