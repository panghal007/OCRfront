import { useState, React, useEffect } from 'react';
import axios from 'axios';
import "../src/App.css"

// React component for filtering and displaying data
const Display = () => {
  // State to store the retrieved data
  const [res, setres] = useState([]);

  // Function to handle deletion of a record by ID
  const handleDlt = (id) => {
    axios.delete(`https://thai-ocrback.onrender.com/api/users/${id}`)
      .then(response => {
        console.log(`Deleted post with ID ${id}`);
        // Trigger data refresh after deletion
        analyse();
      })
      .catch(error => {
        console.error(error);
      });
  }

  // Function to fetch and set data using Axios
  const analyse = async () => {
    try {
      const uri = `https://thai-ocrback.onrender.com/api/users/`;
      const ans = await axios.get(uri);
      console.log(ans.data);
      setres(ans.data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    analyse();
  }, [])

  return (
    <div >
      {/* Uncomment Filterin and Filterout components as needed */}
      {/* <Filterin /> */}
      {/* <Filterout /> */}

      {/* Display data in a card-container */}
      <ul className="card-container">
        {res.map((element) => (
          <li key={element._id} className="card">
            {/* Card content section */}
            <div className="card-content">
              <p>Identification Number: {element.identificationNumber}</p>
              <p>First Name: {element.firstName}</p>
              <p>Last Name: {element.lastName}</p>
              <p>Date of Birth: {element.dateOfBirth}</p>
              <p>Date of Expiry: {element.dateOfExpiry}</p>
              <p>Date of Issue: {element.dateOfIssue}</p>
            </div>
            {/* Card buttons section */}
            <div className="card-buttons">
              <button type="button" className="btn" onClick={() => { handleDlt(element._id) }}>Delete</button>
              <button type="button" className="btn">Update</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Display;
