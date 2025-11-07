import React, { useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function MainApp({ selectedRole, setIsLoggedIn, setSelectedRole }) {
  const [activeSection, setActiveSection] = useState(selectedRole);
  const [selectedArea, setSelectedArea] = useState('rural');
  const [reportText, setReportText] = useState('');

  // Initialize Chart after DOM
  useEffect(() => {
    if (activeSection === 'politician') {
      const ctx = document.getElementById('contributionChart');
      if (!ctx) return;
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['John Doe', 'Jane Smith'],
          datasets: [
            {
              label: 'Contributions',
              data: [75, 60],
              backgroundColor: ['rgba(52, 152, 219, 0.7)', 'rgba(46, 204, 113, 0.7)'],
              borderColor: ['rgba(52, 152, 219, 1)', 'rgba(46, 204, 113, 1)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: { beginAtZero: true, max: 100, ticks: { stepSize: 10 } },
            x: {},
          },
        },
      });
    }
  }, [activeSection]);

  const logout = () => {
    setIsLoggedIn(false);
    setSelectedRole('');
  };

  const fillReport = (text) => {
    setReportText(text);
  };

  const submitReport = () => {
    if (!reportText.trim()) {
      alert('Please enter a report');
      return;
    }
    alert(`Report submitted for ${selectedArea} area:\n${reportText}`);
    setReportText('');
  };

  const toggleArea = (area) => setSelectedArea(area);

  return (
    <div className="main-background">
      {/* Sidebar */}
      <div className="sidebar">
        <h3 className="text-center mb-4"><i className="fas fa-users"></i> Civic Connect</h3>
        <a
          href="#"
          className={activeSection === 'citizen' ? 'active' : ''}
          onClick={() => setActiveSection('citizen')}
        >
          <i className="fas fa-user"></i> Citizen
        </a>
        <a
          href="#"
          className={activeSection === 'politician' ? 'active' : ''}
          onClick={() => setActiveSection('politician')}
        >
          <i className="fas fa-landmark"></i> Politician
        </a>
        <a
          href="#"
          className={activeSection === 'moderator' ? 'active' : ''}
          onClick={() => setActiveSection('moderator')}
        >
          <i className="fas fa-shield-alt"></i> Moderator
        </a>
        <a
          href="#"
          className={activeSection === 'admin' ? 'active' : ''}
          onClick={() => setActiveSection('admin')}
        >
          <i className="fas fa-cogs"></i> Admin
        </a>
        <a href="#" style={{ marginTop: '50px' }} onClick={logout}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </a>
      </div>

      {/* Content */}
      <div className="content">
        <header>
          <div className="user-info">
            <i className="fas fa-user-circle"></i> {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
          </div>
          <h2>Citizen & Politician Interaction Platform</h2>
          <p>Transparency | Engagement | Responsiveness</p>
        </header>

        {/* Citizen Dashboard */}
        {activeSection === 'citizen' && (
          <div className="card">
            <div className="card-header card-header-custom">
              <h4><i className="fas fa-bullhorn"></i> Citizen Dashboard</h4>
            </div>
            <div className="card-body">
              <p>📢 Report issues, provide feedback, and get updates.</p>

              {/* Area Selection */}
              <div className="area-selection">
                <h5>Select Your Area Type:</h5>
                <div className="area-options">
                  <button
                    className={`area-btn ${selectedArea === 'rural' ? 'active' : ''}`}
                    onClick={() => toggleArea('rural')}
                  >
                    Rural Area
                  </button>
                  <button
                    className={`area-btn ${selectedArea === 'urban' ? 'active' : ''}`}
                    onClick={() => toggleArea('urban')}
                  >
                    Urban Area
                  </button>
                </div>

                {/* Area-specific content */}
                {selectedArea === 'rural' && (
                  <div className="area-content">
                    <h6><i className="fas fa-tractor"></i> Rural Area Issues</h6>
                    <div className="issue-category">
                      <strong>Agriculture & Farming</strong>
                      <ul className="issue-list">
                        <li onClick={() => fillReport('Crop damage due to pests')}>Crop damage due to pests</li>
                        <li onClick={() => fillReport('Irrigation water shortage')}>Irrigation water shortage</li>
                        <li onClick={() => fillReport('Fertilizer subsidy issues')}>Fertilizer subsidy issues</li>
                        <li onClick={() => fillReport('Farm equipment availability')}>Farm equipment availability</li>
                      </ul>
                    </div>
                  </div>
                )}

                {selectedArea === 'urban' && (
                  <div className="area-content">
                    <h6><i className="fas fa-building"></i> Urban Area Issues</h6>
                    <div className="issue-category">
                      <strong>Infrastructure & Utilities</strong>
                      <ul className="issue-list">
                        <li onClick={() => fillReport('Road maintenance and potholes')}>Road maintenance and potholes</li>
                        <li onClick={() => fillReport('Water supply and quality issues')}>Water supply and quality issues</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <textarea
                className="form-control mt-3"
                rows="4"
                placeholder="Report an issue..."
                value={reportText}
                onChange={(e) => setReportText(e.target.value)}
              />
              <button className="btn btn-primary mt-2" onClick={submitReport}>
                <i className="fas fa-paper-plane"></i> Submit Report
              </button>
            </div>
          </div>
        )}

        {/* Politician Dashboard */}
        {activeSection === 'politician' && (
          <>
            <div className="card">
              <div className="card-header card-header-custom">
                <h4><i className="fas fa-landmark"></i> Politician Dashboard</h4>
              </div>
              <div className="card-body">
                <textarea className="form-control" placeholder="Write an update for citizens..."></textarea>
                <button className="btn btn-success mt-2"><i className="fas fa-share"></i> Post Update</button>
              </div>
            </div>

            <div className="card mt-3">
              <div className="card-header card-header-custom">
                <h4><i className="fas fa-clipboard-list"></i> Citizen Reports</h4>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item"><i className="fas fa-lightbulb text-warning"></i> Streetlights not working</li>
                  <li className="list-group-item"><i className="fas fa-trash text-danger"></i> Garbage collection delayed</li>
                </ul>
              </div>
            </div>

            <div className="card mt-3">
              <div className="card-header card-header-custom">
                <h4><i className="fas fa-chart-bar"></i> Contributions Overview</h4>
              </div>
              <div className="card-body">
                <canvas id="contributionChart" height="150"></canvas>
              </div>
            </div>
          </>
        )}

        {/* Moderator Dashboard */}
        {activeSection === 'moderator' && (
          <div className="card">
            <div className="card-header card-header-custom">
              <h4><i className="fas fa-shield-alt"></i> Moderator Dashboard</h4>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item"><i className="fas fa-flag text-danger"></i> Review flagged comment</li>
                <li className="list-group-item"><i className="fas fa-handshake text-info"></i> Resolve conflict</li>
              </ul>
            </div>
          </div>
        )}

        {/* Admin Dashboard */}
        {activeSection === 'admin' && (
          <div className="card">
            <div className="card-header card-header-custom">
              <h4><i className="fas fa-cogs"></i> Admin Dashboard</h4>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item"><i className="fas fa-users"></i> Manage Users</li>
                <li className="list-group-item"><i className="fas fa-file-alt"></i> System Logs</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainApp;
