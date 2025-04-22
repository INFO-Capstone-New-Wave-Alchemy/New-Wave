import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newChat = [...chat, { type: 'user', text: input }];
    setChat(newChat);
    setInput('');

    try {
      const res = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();
      setChat([...newChat, { type: 'bot', text: data.reply }]);
    } catch (error) {
      setChat([...newChat, { type: 'bot', text: 'Error connecting to server 😞' }]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="App">
      <h1>💬 My ChatGPT Bot</h1>
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
  );
}

export default App;