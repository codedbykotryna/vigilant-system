// src/components/chat/ChatInput.jsx

import { useState } from 'react';

function ChatInput({ onSend, disabled, placeholder }) {
  const [input, setInput] = useState('');
  
  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSend(input);
      setInput('');
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !disabled) {
      handleSend();
    }
  };
  
  return (
    <div style={{
      display: 'flex',
      gap: '12px',
      padding: '16px',
      borderTop: '1px solid #E5E7EB',
      backgroundColor: 'white'
    }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder || "Type your message..."}
        disabled={disabled}
        style={{
          flex: 1,
          padding: '12px 16px',
          border: '2px solid #E5E7EB',
          borderRadius: '8px',
          fontSize: '16px',
          outline: 'none',
          backgroundColor: disabled ? '#F3F4F6' : 'white',
          color: '#1F2937',
          cursor: disabled ? 'not-allowed' : 'text',
          opacity: disabled ? 0.6 : 1
        }}
      />
      <button
        onClick={handleSend}
        disabled={disabled}
        style={{
          padding: '12px 24px',
          backgroundColor: disabled ? '#9CA3AF' : '#4F46E5',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: disabled ? 'not-allowed' : 'pointer',
          fontSize: '16px',
          fontWeight: '500',
          opacity: disabled ? 0.6 : 1
        }}
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;