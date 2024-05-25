import React from 'react';

function EmployeeList({ employees, addToTeam }) {
  return (
    <div className="employee-list">
      <h2>All Employees</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id} style={{ color: employee.added ? 'gray' : 'black' }}>
            {employee.first_name} {employee.last_name} (Age: {employee.age})
            {!employee.added && <button onClick={() => addToTeam(employee)}>ADD</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
