import { useState } from "react";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";

function ChatContainer({ mode }) {
  // State to store all messages
  const [messages, setMessages] = useState([
    { text: `Hi! I'm your ${mode} buddy. How can I help you today?`, sender: 'ai' }
  ]);
  
  const handleSendMessage = (text) => {
    // Add user message
    const userMessage = { text, sender: 'user' };
    setMessages([...messages, userMessage]);
    
    // Simulate AI response (for now, just echo back)
    setTimeout(() => {
      const aiMessage = { 
        text: `You said: "${text}". (AI response coming soon!)`, 
        sender: 'ai' 
      };
      setMessages(prevMessages => [...prevMessages, aiMessage]);
    }, 1000);
  };
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '500px',
      border: '1px solid #E5E7EB',
      borderRadius: '12px',
      overflow: 'hidden',
      backgroundColor: 'white'
    }}>
      {/* Messages area */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px'
      }}>
        {messages.map((msg, index) => (
          <ChatBubble 
            key={index} 
            message={msg.text} 
            sender={msg.sender} 
          />
        ))}
      </div>
      
      {/* Input area */}
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}

export default ChatContainer;