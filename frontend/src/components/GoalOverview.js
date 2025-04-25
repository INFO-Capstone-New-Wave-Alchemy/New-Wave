import React, { useEffect, useState } from 'react';
import '../index.css'; 

const GoalOverview = () => {
  const [goals, setGoals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All Priorities');

  useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem('goals')) || [];
    setGoals(storedGoals);
  }, []);

  const handleAddGoal = () => {
    window.location.href = '/goal-tracking';
  };

  const handleDeleteGoal = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
    localStorage.setItem('goals', JSON.stringify(updatedGoals));
  };

  const handleMarkCompleted = (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].status = 'Completed';
    setGoals(updatedGoals);
    localStorage.setItem('goals', JSON.stringify(updatedGoals));
  };

  const filteredGoals = goals.filter(goal => {
    const matchesSearch = goal.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = priorityFilter === 'All Priorities' || goal.priority === priorityFilter;
    return matchesSearch && matchesPriority;
  });

  return (
    <div className="goal-overview-container">
      <h2 className="goal-title">Goal Overview</h2>

      <div className="goal-header">
        <input 
          className="goal-search" 
          placeholder="Search goals..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          className="goal-filter" 
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option>All Priorities</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <div className="goal-summary">
          {goals.filter(g => g.status === 'In Progress').length} In Progress |{' '}
          {goals.filter(g => g.status === 'Not Started').length} Not Started |{' '}
          {goals.filter(g => g.status === 'Completed').length} Completed
        </div>
      </div>

      <div className="goal-grid">
        {filteredGoals.length === 0 ? (
          <div className="goal-empty">
            <p>No more goals yet</p>
            <p>Start by adding a new one</p>
            <button className="add-goal-button" onClick={handleAddGoal}>Add Goal</button>
          </div>
        ) : (
          filteredGoals.map((goal, idx) => (
            <div key={idx} className="goal-card">
              <div className="goal-header-row">
                <h3>{goal.title}</h3>
                <span className={`priority-tag ${goal.priority.toLowerCase()}`}>
                  {goal.priority} Priority
                </span>
              </div>
              <p className="goal-desc">{goal.description}</p>
              <p className="goal-info">📅 Target: {goal.date}</p>
              <p className="goal-info">⏱ Status: {goal.status}</p>
              <div className="goal-actions">
                {goal.status !== 'Completed' && (
                  <button className="complete" onClick={() => handleMarkCompleted(idx)}>
                    Mark as Completed
                  </button>
                )}
                <button className="delete-goal-button" onClick={() => handleDeleteGoal(idx)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="button-row">
        <button className="add-goal-button" onClick={handleAddGoal}>Add Goal</button>
        <button className="back-button" onClick={() => window.location.href = '/goal-tracking'}>
          ← Back to Goal Setting
        </button>
      </div>
    </div>
  );
};

export default GoalOverview;
