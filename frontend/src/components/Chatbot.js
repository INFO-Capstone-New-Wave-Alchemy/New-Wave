import React, { useState, useEffect, useCallback } from 'react';

function ChatBot({ endpoint = 'http://localhost:5001', title = '💬 My Mentor' }) {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const [chatSessions, setChatSessions] = useState([]);
  const [currentSessionId, setCurrentSessionId] = useState(null);

  const loadSession = useCallback((sessionId) => {
    const session = chatSessions.find(s => s.id === sessionId);
    if (session) {
      setCurrentSessionId(sessionId);
      setChat(session.messages);
    }
  }, [chatSessions]);

  useEffect(() => {
    const savedSessions = localStorage.getItem('chatSessions');
    if (savedSessions) {
      const sessions = JSON.parse(savedSessions);
      setChatSessions(sessions);
      
      if (sessions.length > 0 && !currentSessionId) {
        loadSession(sessions[sessions.length - 1].id);
      }
    }
  }, [currentSessionId, loadSession]);

  useEffect(() => {
    if (chat.length === 0 || !currentSessionId) return;

    const updatedSessions = [...chatSessions];
    const sessionIndex = updatedSessions.findIndex(s => s.id === currentSessionId);
    
    if (sessionIndex >= 0) {
      updatedSessions[sessionIndex].messages = chat;
    } else {
      updatedSessions.push({
        id: currentSessionId,
        title: `Chat ${chatSessions.length + 1}`,
        timestamp: new Date().toISOString(),
        messages: chat
      });
    }

    setChatSessions(updatedSessions);
    localStorage.setItem('chatSessions', JSON.stringify(updatedSessions));
  }, [chat, chatSessions, currentSessionId]);

  const startNewSession = () => {
    const newSessionId = Date.now().toString();
    setCurrentSessionId(newSessionId);
    setChat([]);
  };

  const deleteSession = (sessionId) => {
    const updatedSessions = chatSessions.filter(s => s.id !== sessionId);
    setChatSessions(updatedSessions);
    localStorage.setItem('chatSessions', JSON.stringify(updatedSessions));
    
    if (sessionId === currentSessionId) {
      startNewSession();
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    if (!currentSessionId) {
      startNewSession();
    }

    const newChat = [...chat, { type: 'user', text: input }];
    setChat(newChat);
    setInput('');

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();
      setChat([...newChat, { type: 'bot', text: data.reply }]);
    } catch (error) {
      setChat([...newChat, { type: 'bot', text: 'Error connecting to server' }]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="chatbot-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Chat History</h3>
        </div>
        <button className="new-chat-btn" onClick={startNewSession}>
          + New Chat
        </button>
        <div className="chat-sessions">
          {chatSessions.map((session) => (
            <div 
              key={session.id} 
              className={`session-item ${currentSessionId === session.id ? 'active' : ''}`}
              onClick={() => loadSession(session.id)}
            >
              <span className="session-title">{session.title}</span>
              <span className="session-preview">
                {session.messages[0]?.text.substring(0, 30)}...
              </span>
              <button 
                className="delete-session" 
                onClick={(e) => {
                  e.stopPropagation();
                  deleteSession(session.id);
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="chatbot">
        <h1>{title}</h1>
        <div className="chat-box">
          {chat.map((msg, idx) => (
            <div key={idx} className={`chat-msg ${msg.type}`}>
              <span>{msg.text}</span>
            </div>
          ))}
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;