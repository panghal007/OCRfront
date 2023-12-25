import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Displayin from './displayin';

// React component for filtering and displaying records
const Displayout = () => {
  // State to store filtered records
  const [records, setRecords] = useState([]);

  // Function to handle filtering based on conditionsArray
  const handleFilter = async (conditionsArray) => {
    try {
      // Make a GET request to the API with filtering conditions
      const response = await axios.get('https://thai-ocrback.onrender.com/api/users', conditionsArray);
      console.log(response.data);

      // Update state with the filtered records
      setRecords(response.data);
    } catch (error) {
      console.error('Error fetching filtered records:', error);
    }
  };

  // Fetch all records initially or as needed on component mount
  useEffect(() => {
    // 
    // handleFilter(); 
  }, []);

  return (
    <div>
      {/* Render the filtered records */}
      <ul>
        {records.map((record) => (
          <li key={record._id}>{/* Render record details here */}</li>
        ))}
      </ul>

      {/* Render the filter form */}
      <Displayin onFilter={handleFilter} />
    </div>
  );
};

export default Displayout;
