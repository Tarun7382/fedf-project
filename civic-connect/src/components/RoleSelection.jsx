import React from 'react';

function RoleSelection({ setSelectedRole }) {
  return (
    <div className="role-selection-page">
      <div className="role-container">
        <div className="role-header">
          <h1><i className="fas fa-users"></i> Civic Connect</h1>
          <p>Select your role to continue</p>
        </div>
        <div className="role-cards">
          <div className="role-card citizen" onClick={() => setSelectedRole('citizen')}>
            <div className="role-icon"><i className="fas fa-user"></i></div>
            <h3>Citizen</h3>
          </div>
          <div className="role-card politician" onClick={() => setSelectedRole('politician')}>
            <div className="role-icon"><i className="fas fa-landmark"></i></div>
            <h3>Politician</h3>
          </div>
          <div className="role-card admin" onClick={() => setSelectedRole('admin')}>
            <div className="role-icon"><i className="fas fa-cogs"></i></div>
            <h3>Admin</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;
