import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ChatBot from './Chatbot';
import GoalSetting from './GoalSetting';
import GoalOverview from './GoalOverview'; // ✅ import the new component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1 style={{ padding: '2rem' }}>Welcome to the Dashboard</h1>} />
        <Route path="/ai-mentor" element={<ChatBot />} />
        <Route path="/goal-tracking" element={<GoalSetting />} />
        <Route path="/goal-overview" element={<GoalOverview />} /> {/* ✅ add this line */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
