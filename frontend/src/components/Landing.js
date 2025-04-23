import React from "react";
import { useNavigate } from "react-router-dom"; 
import '../index.css';

function Landing() {
  const navigate = useNavigate(); 

  return (
    <div className="container">
      <div className="dashboard">
        <main className="main-content">
          <div className="content-wrapper">
            <h1 className="title">
              We Analyze. You Succeed. <br />
              Let's Get Started!
            </h1>
            <p className="subtitle">
              Your journey to smarter decisions starts here. Complete the quiz
              and access your customized dashboard.
            </p>
            <div className="card-container">
              <div className="card">
                <h2 className="card-title">
                  AI Mentor
                </h2>
                <p className="card-text">
                  The founder space is complex. Get advice and set goals with an AI mentor here!
                </p>
                <button
                  className="card-button"
                  onClick={() => navigate('/ai-mentor')} 
                >
                  <span>AI Mentor</span>
                </button>
              </div>
              <div className="card">
                <h2 className="card-title">
                  Goal Tracker
                </h2>
                <p className="card-text">
                  Discover how you can improve your traits! Track milestones and get personalized insights to grow faster!
                </p>
                <button
                  className="card-button"
                  onClick={() => navigate('/goal-tracking')}
                >
                  <span>Goal Tracker</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Landing;
