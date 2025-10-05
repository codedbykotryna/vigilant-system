import { useState } from 'react';

function ChatInput({onSend})
{
    const [input,setInput] = useState('');

    const handleSend = () => {
        if(input.trim()){
            onSend(input);
            setInput('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter'){
            handleSend()
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
        placeholder="Type your message..."
        style={{
          flex: 1,
          padding: '12px 16px',
          border: '2px solid #E5E7EB',
          borderRadius: '8px',
          fontSize: '16px',
          outline: 'none'
        }}
      />
      <button
        onClick={handleSend}
        style={{
          padding: '12px 24px',
          backgroundColor: '#4F46E5',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '500'
        }}
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;