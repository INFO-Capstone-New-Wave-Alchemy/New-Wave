import React from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="hero-section">
        {/* Left content */}
        <div className="hero-content">
          <div className="badge">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            AI-Powered Growth Platform
          </div>

          <h1 className="hero-title">
            We <span className="analyze">Analyze</span>. You <span className="succeed">Succeed</span>.<br />
            Let's Get <span className="started">Started!</span>
          </h1>

          <p className="hero-subtitle">
            Your journey to smarter decisions starts here. Get help from our AI Mentor and use results to create goals to make you a better founder!
          </p>
          <div className="features">
            <div className="feature-card">
              <div className="feature-icon data-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div className="feature-text">
                <span className="feature-title">Data-Driven</span>
                <span className="feature-subtitle">Decision Making</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon ai-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>
              </div>
              <div className="feature-text">
                <span className="feature-title">AI Powered</span>
                <span className="feature-subtitle">Recommendations</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon goal-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <div className="feature-text">
                <span className="feature-title">Goal Tracking</span>
                <span className="feature-subtitle">For Success</span>
              </div>
            </div>
          </div>
          {/* Feature Cards - Now outside and below the hero section */}
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
      </div>
      {/* Right content - Image placeholder */}
      <div className="image-placeholder">
          <img
            src="../img/NWV_LinkedIn_PFP_v01.png"
            alt="Dashboard Preview"
            className="dashboard-image"
          />
        </div>
    </div>
  );
}

export default Landing;