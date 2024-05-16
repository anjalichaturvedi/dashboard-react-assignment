import React, { useState } from 'react';
import './Dashboard.css'; // Create a corresponding CSS file for styling
import Modal from 'react-modal';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

Modal.setAppElement('#root');

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numInvites, setNumInvites] = useState(100);
  const [duration, setDuration] = useState(5);

  const totalInvestment = numInvites * 1000;
  const estimatedReturns = totalInvestment * (duration * 0.12);
  const totalValue = totalInvestment + estimatedReturns;

  const data = [
    { name: 'Total Investment', value: totalInvestment },
    { name: 'Est. Returns', value: estimatedReturns },
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div className="dashboard">
      <header>
        <button>Create course</button>
        <button>Preview home page</button>
        <button>Preview after login page</button>
        <button>View welcome screen</button>
        <button className="button" onClick={() => setIsModalOpen(true)}>Invite</button>
      </header>
      <section className="overview">
        <div className="stats">
          <div className="stat-item">
            <p>All users</p>
            <h3>1</h3>
          </div>
          <div className="stat-item">
            <p>Conversions</p>
            <h3>0%</h3>
          </div>
          <div className="stat-item">
            <p>30 days sales</p>
            <h3>0</h3>
          </div>
          <div className="stat-item">
            <p>Avg time</p>
            <h3>0 min</h3>
          </div>
          <div className="stat-item">
            <p>Courses</p>
            <h3>0</h3>
          </div>
          <div className="stat-item">
            <p>Course categories</p>
            <h3>0</h3>
          </div>
        </div>
        <div className="graph">
          <h4>New Signups (Last 7 days)</h4>
          {/* Mock graph */}
          <div className="mock-graph">
            <div className="graph-bar" style={{ height: '10%' }}></div>
            <div className="graph-bar" style={{ height: '20%' }}></div>
            <div className="graph-bar" style={{ height: '30%' }}></div>
            <div className="graph-bar" style={{ height: '40%' }}></div>
            <div className="graph-bar" style={{ height: '50%' }}></div>
            <div className="graph-bar" style={{ height: '60%' }}></div>
            <div className="graph-bar" style={{ height: '70%' }}></div>
          </div>
        </div>
      </section>
      <section className="users-and-logs">
        <div className="new-users">
          <h4>New users</h4>
          <div className="user-item">
            <p>hubx</p>
            <span>24 minutes</span>
          </div>
        </div>
        <div className="events-log">
          <h4>Events Log</h4>
          <div className="event-item">
            <p>hubx</p> 
            <span>Logged in</span> <br></br>
            <a href="#">more info</a>
          </div>
        </div>
      </section>
      <section className="blog-and-trial">
        <div className="how-to-sell-courses">
          <h4>How to sell courses blog</h4>
          <ul>
            <li><a href="#">Blended Learning: What It Is, Why It Matters & How to Apply</a></li>
            <li><a href="#">Join the Course Sales Bootcamp [Free Live Workshops]</a></li>
            <li><a href="#">12 Steps to Creating Awesome Live Classes in 2021</a></li>
            <li><a href="#">Guy Kawasaki on the Future of Business in the Midst of a Pandemic</a></li>
            <li><a href="#">What is Educational Marketing & How to Use it to Grow with Examples</a></li>
          </ul>
        </div>
        <div className="trial-period">
          <h4>Trial period</h4>
          <div className="trial-info">
            <p>30 DAYS LEFT</p>
            <button>Upgrade now!</button>
          </div>
        </div>
      </section>
      <section className="online-users">
        <h4>Online users</h4>
        <div className="online-user-item trial-info">
          <p>hubx</p>
          <button>Contact</button>
        </div>
      </section>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Invite Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Invite to Event</h2>
        <form className="form">
          <label htmlFor="numInvites">No. Of Invites</label>
          <input
            type="range"
            id="numInvites"
            name="numInvites"
            min="1"
            max="500"
            value={numInvites}
            onChange={(e) => setNumInvites(e.target.value)}
          />
          <span>{numInvites}</span>

          <label htmlFor="duration">Duration Of Event (Years)</label>
          <input
            type="range"
            id="duration"
            name="duration"
            min="1"
            max="10"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <span>{duration} years</span>

          <PieChart width={300} height={300}>
            <Pie
              data={data}
              cx={150}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>

          <div className="summary">
            <p>Total Investment: ₹{totalInvestment.toLocaleString()}</p>
            <p>Est. Returns: ₹{estimatedReturns.toLocaleString()}</p>
            <p>Total Value: ₹{totalValue.toLocaleString()}</p>
          </div>

          <div className="modal-actions">
            <button type="button" className="button" onClick={() => setIsModalOpen(false)}>
              Send Invite
            </button>
            <button type="button" className="button" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};


export default Dashboard;