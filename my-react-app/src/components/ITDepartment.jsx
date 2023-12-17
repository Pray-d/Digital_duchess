import React from 'react';
import { Link } from 'react-router-dom';

const ITDepartment = () => {
  // Dummy data for the IT team
  const itTeam = [
    { id: 1, name: 'John Doe', imageUrl: 'john_doe_image_url' },
    // Add more team members as needed
  ];

  return (
    <div>
      <h1>IT Department</h1>
      {/* List of IT Team Members */}
      <ul>
        {itTeam.map((member) => (
          <li key={member.id}>
            <Link to={`/team/${member.id}`}>
              <img src={member.imageUrl} alt={member.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ITDepartment;
