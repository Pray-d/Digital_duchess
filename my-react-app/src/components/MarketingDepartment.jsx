import React from 'react';
import { Link } from 'react-router-dom';

const MarketingDepartment = () => {
  // Dummy data for the marketing team
  const marketingTeam = [
    { id: 1, name: 'Jane Doe', imageUrl: 'jane_doe_image_url' },
    // Add more team members as needed
  ];

  return (
    <div>
      <h1>Marketing Department</h1>
      {/* List of Marketing Team Members */}
      <ul>
        {marketingTeam.map((member) => (
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

export default MarketingDepartment;
