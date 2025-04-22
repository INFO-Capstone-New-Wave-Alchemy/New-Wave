import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ChatBot from './Chatbot';
import GoalSetting from './GoalSetting';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/ai-mentor" element={<ChatBot />} />
        <Route path="/goal-tracking" element={<GoalSetting />} />
        <Route path="/" element={<h1 style={{ padding: '2rem' }}>Welcome to the Dashboard</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
