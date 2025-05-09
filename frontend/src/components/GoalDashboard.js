// GoalDashboard.js
import React, { useEffect, useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import '../index.css';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const GoalDashboard = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem('goals')) || [];
    setGoals(storedGoals);
  }, []);

  const totalGoals = goals.length;
  const completedGoals = goals.filter(goal => goal.status === 'Completed').length;
  const inProgressGoals = goals.filter(goal => goal.status === 'In Progress').length;
  const notStartedGoals = goals.filter(goal => goal.status === 'Not Started').length;

  const pieData = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        data: [completedGoals, inProgressGoals, notStartedGoals],
        backgroundColor: ['#4ade80', '#facc15', '#60a5fa'],
        hoverOffset: 4,
      },
    ],
  };

  const priorities = { High: 0, Medium: 0, Low: 0 };
  goals.forEach(goal => {
    if (goal.priority) {
      priorities[goal.priority] += 1;
    }
  });

  const barData = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [
      {
        label: '# of Goals',
        data: [priorities.High, priorities.Medium, priorities.Low],
        backgroundColor: ['#ef4444', '#facc15', '#7baf98'],
      },
    ],
  };

  const upcomingGoals = [...goals]
    .filter(goal => goal.status !== 'Completed' && goal.date)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  return (
    <div className="goal-dashboard-container">
      <h2 className="goal-title">Goal Dashboard</h2>

      <div className="dashboard-summary">
        <div className="summary-card">
          <h3>Total Goals</h3>
          <p>{totalGoals}</p>
        </div>
        <div className="summary-card">
          <h3>Completed</h3>
          <p>{completedGoals}</p>
        </div>
        <div className="summary-card">
          <h3>In Progress</h3>
          <p>{inProgressGoals}</p>
        </div>
        <div className="summary-card">
          <h3>Not Started</h3>
          <p>{notStartedGoals}</p>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-card">
          <h3>Status Breakdown</h3>
          <div className="chart-wrapper">
          <Pie data={pieData} options={{ maintainAspectRatio: false }}/>
        </div>
        </div>
        <div className="chart-card">
          <h3>Goals by Priority</h3>
          <div className="cjart-wrapper">
          <Bar data={barData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
      </div>

      <div className="upcoming-deadlines">
        <h3>Upcoming Deadlines</h3>
        {upcomingGoals.length === 0 ? (
          <p>No upcoming deadlines</p>
        ) : (
          <ul>
            {upcomingGoals.map((goal, idx) => (
              <li key={idx}>
                <strong>{goal.title}</strong> - Due: {goal.date}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GoalDashboard;