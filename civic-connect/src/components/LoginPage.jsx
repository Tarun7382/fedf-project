import React, { useState } from 'react';

function LoginPage({ selectedRole, setIsLoggedIn, setSelectedRole }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (!username || !password) {
      alert('Enter both username and password');
      return;
    }
    setIsLoggedIn(true);
  };

  const backToRoles = () => {
    setSelectedRole('');
  };

  const roleLabels = {
    citizen: { icon: 'fas fa-user', text: 'Citizen Login' },
    politician: { icon: 'fas fa-landmark', text: 'Politician Login' },
    admin: { icon: 'fas fa-cogs', text: 'Admin Login' },
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <div className={`login-header ${selectedRole}-header`}>
          <h2><i className={roleLabels[selectedRole].icon}></i> {roleLabels[selectedRole].text}</h2>
        </div>
        <div className="login-body">
          <input
            type="text"
            placeholder="Username"
            className="form-control mb-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={`btn btn-login ${selectedRole}-btn`} onClick={login}>
            Login
          </button>
          <button className="btn btn-link mt-2" onClick={backToRoles}>
            Back to Role Selection
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
