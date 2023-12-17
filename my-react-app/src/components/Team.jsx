import React from 'react';
import { useParams } from 'react-router-dom';

const TeamDepartment = ({ teamData }) => {
  return (
    <div>
      <header>
        <h1>Department Name</h1>
      </header>

      {/* List of Team Members */}
      <ul>
        {teamData.map((member) => (
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

export default TeamDepartment;
