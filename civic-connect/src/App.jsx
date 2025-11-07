import React, { useState } from 'react';

function App() {
  const [activeArea, setActiveArea] = useState('Area 1');

  return (
    <div>
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Dashboard</h3>
        <a href="#" className="active">Home</a>
        <a href="#">Reports</a>
        <a href="#">Settings</a>
      </div>

      {/* Content */}
      <div className="content">
        <header>
          <h2>Welcome!</h2>
          <p>Select an area:</p>
        </header>

        {/* Area Buttons */}
        <div className="area-selection">
          {['Area 1', 'Area 2', 'Area 3'].map(area => (
            <button
              key={area}
              className={`area-btn ${activeArea === area ? 'active' : ''}`}
              onClick={() => setActiveArea(area)}
            >
              {area}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="card">
          <div className="card-header-custom">Issues in {activeArea}</div>
          <ul className="issue-list">
            <li>Issue 1</li>
            <li>Issue 2</li>
            <li>Issue 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
