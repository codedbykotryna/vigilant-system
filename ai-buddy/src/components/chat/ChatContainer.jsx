// src/components/chat/ChatContainer.jsx

import { useState } from 'react';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import { sendMessage } from '../../services/ollama';

function ChatContainer({ mode, mood }) {
  // State to store all messages
  const [messages, setMessages] = useState([
    { text: `Hi! I'm your ${mode} buddy. How can I help you today?`, sender: 'ai' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSendMessage = async (text) => {
    // Add user message immediately
    const userMessage = { text, sender: 'user' };
    setMessages([...messages, userMessage]);
    
    // Show loading state
    setIsLoading(true);
    
    // Get AI response from Ollama with mood
    const aiResponse = await sendMessage(text, mode, mood);
    
    // Add AI message
    const aiMessage = { text: aiResponse, sender: 'ai' };
    setMessages(prevMessages => [...prevMessages, aiMessage]);
    
    // Hide loading state
    setIsLoading(false);
  };
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '400px',
      border: '1px solid #E5E7EB',
      borderRadius: '16px',
      overflow: 'hidden',
      backgroundColor: '#FAFAFA'
    }}>
      {/* Messages area */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '20px',
        backgroundColor: 'white'
      }}>
        {messages.map((msg, index) => (
          <ChatBubble 
            key={index} 
            message={msg.text} 
            sender={msg.sender} 
          />
        ))}
        
        {/* Loading indicator */}
        {isLoading && (
          <div style={{ 
            color: '#9CA3AF', 
            fontStyle: 'italic',
            marginTop: '8px',
            fontSize: '14px'
          }}>
            AI is thinking...
          </div>
        )}
      </div>
      
      {/* Input area */}
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}

export default ChatContainer;