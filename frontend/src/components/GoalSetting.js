import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const GoalSetting = () => {
  const navigate = useNavigate();

  const [goal, setGoal] = useState({
    title: '',
    description: '',
    date: '',
    priority: 'Low',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingGoals = JSON.parse(localStorage.getItem('goals')) || [];
    const updatedGoals = [...existingGoals, { ...goal, status: 'Not Started' }];
    localStorage.setItem('goals', JSON.stringify(updatedGoals));
    navigate('/goal-overview');
  };

  return (
    <div className="goal-page">
      <div className="goal-form-container">
        <h2>Create a New Goal</h2>
        <form onSubmit={handleSubmit} className="goal-form">
          <input
            type="text"
            name="title"
            placeholder="e.g., Launch MVP by July"
            value={goal.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Why is this goal important? What steps will you take?"
            value={goal.description}
            onChange={handleChange}
            rows={5}
            required
          />
          <input
            type="date"
            name="date"
            value={goal.date}
            onChange={handleChange}
          />
          <select
            name="priority"
            value={goal.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button type="submit" className="goal-submit-btn">Add Goal</button>
        </form>
        <p className="goal-quote">
          "Setting goals is the first step in turning the invisible in to the visible."  
          <br /> -- Tony Robbins
        </p>
      </div>
    </div>
  );
};

export default GoalSetting;
