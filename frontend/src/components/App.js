import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ChatBot from './Chatbot';
import GoalSetting from './GoalSetting';
import GoalOverview from './GoalOverview';
import Landing from './Landing';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/Landing" />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/ai-mentor" element={<ChatBot />} />
        <Route path="/goal-tracking" element={<GoalSetting />} />
        <Route path="/goal-overview" element={<GoalOverview />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;