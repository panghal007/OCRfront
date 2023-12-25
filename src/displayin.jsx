// Example React component for filtering
import React, { useState } from 'react';

// Global array to store filtering conditions
let conditionsArray = [];

const Displayin = ({ onFilter }) => {
  // Individual state for filtering criteria
  const [firstName, setFirstName] = useState('');

  // Update the global conditionsArray with the current filtering criteria
  conditionsArray = [{ 'firstname': firstName }];

  // Function to handle the filtering and pass criteria to the parent component
  const handleFilter = () => {
    // Pass the filtering criteria to the parent component or make an API call here
    onFilter(conditionsArray);
  };

  return (
    <div>
      {/* Input field for First Name */}
      <label>First Name:</label>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

      {/* Button to trigger the filtering */}
      <button onClick={handleFilter}>Display</button>
    </div>
  );
};

export default Displayin;
