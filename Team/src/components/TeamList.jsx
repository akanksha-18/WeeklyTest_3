import React from 'react';

function TeamList({ team, removeFromTeam }) {
  const averageAge = team.length ? (team.reduce((sum, emp) => sum + emp.age, 0) / team.length).toFixed(2) : 0;

  const sortTeamByAge = () => {
    team.sort((a, b) => a.age - b.age);
  };

  return (
    <div className="team-list">
      <h2>Team Members</h2>
      <button onClick={sortTeamByAge}>SORT BY AGE</button>
      <ul>
        {team.map(employee => (
          <li key={employee.id}>
            {employee.first_name} {employee.last_name} (Age: {employee.age})
            <button onClick={() => removeFromTeam(employee)}>REMOVE</button>
          </li>
        ))}
      </ul>
      <div className="average-age">Average Age: {averageAge}</div>
    </div>
  );
}

export default TeamList;
