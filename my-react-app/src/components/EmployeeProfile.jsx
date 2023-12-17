import React from 'react';
import { useParams } from 'react-router-dom';

const EmployeeProfile = () => {
  const { employeeId } = useParams();
  // Fetch employee details based on employeeId from the backend (MongoDB)

  return (
    <div>
      {/* Display employee profile */}
      <h1>Employee Profile</h1>
      {/* Add content here */}
    </div>
  );
};

export default EmployeeProfile;
