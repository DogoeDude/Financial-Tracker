import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Settings() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? '#272727' : '#f0f0f0';  // Switch between dark and light
    document.body.style.color = isDarkMode ? 'white' : 'black'; // Adjust text color
  };

  return (
    <div className='settings-div'>
      <p>Welcome to Settings Page</p>
      <button className='set-btns' onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <button className='set-btns' id='home-btn' onClick={() => navigate('/')}>
        Home
      </button>
    </div>
  );
}

export default Settings;
