import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../src/App.css"

// React component for the home page
const Home = () => {
  // useNavigate hook from 'react-router-dom' to enable navigation
  const navigate = useNavigate();

  // Function to handle button click and navigate to the '/filter' route
  const handleButtonClick = () => {
    // Use the navigate function to navigate to another route
    navigate('/viewData');
  };

  // Function to handle button click and navigate to the '/output' route
  const handleButtonClick1 = () => {
    // Use the navigate function to navigate to another route
    navigate('/extractOCR');
  };

  return (
    <div>
      {/* OCR section with buttons for navigation */}
      <div className="ocr">
        <p>Thai-ID OCR</p>
        <button onClick={handleButtonClick}>Lets See the Data</button>
        <button onClick={handleButtonClick1}>Lets Extract Text</button>
      </div>
    </div>
  );
};

export default Home;
