// src/components/chat/ChatContainer.jsx

import { useState, useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import { sendMessage } from '../../services/ollama';
import { getChatHistory, saveChatHistory, clearChatHistory } from '../../services/storage';
import { MODE_INFO } from '../../utils/constants';

function ChatContainer({ mode, mood, isGlobalLoading, setGlobalLoading }) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // ✨ NEW: Reference to scroll to bottom
  const messagesEndRef = useRef(null);

  // Load chat history when mode changes
  useEffect(() => {
    const history = getChatHistory(mode);
    setMessages(history);
  }, [mode]);

  // ✨ NEW: Auto-scroll when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (userMessage) => {
    // Prevent multiple concurrent chats
    if (isGlobalLoading) return;

    // Add user message with timestamp
    const userMsg = { 
      sender: 'user', 
      text: userMessage,
      timestamp: new Date().toISOString()
    };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    saveChatHistory(mode, updatedMessages);

    // Set loading states
    setIsLoading(true);
    setGlobalLoading(true);

    try {
      // Get AI response
      const aiResponse = await sendMessage(userMessage, mode, mood);
      const aiMsg = { 
        sender: 'ai', 
        text: aiResponse,
        timestamp: new Date().toISOString()
      };
      
      const finalMessages = [...updatedMessages, aiMsg];
      setMessages(finalMessages);
      saveChatHistory(mode, finalMessages);
    } catch (error) {
      console.error('Error:', error);
      const errorMsg = { 
        sender: 'ai', 
        text: 'Sorry, I had trouble responding. Is Ollama running?',
        timestamp: new Date().toISOString()
      };
      const finalMessages = [...updatedMessages, errorMsg];
      setMessages(finalMessages);
      saveChatHistory(mode, finalMessages);
    } finally {
      setIsLoading(false);
      setGlobalLoading(false);
    }
  };

  const handleClearChat = () => {
    if (confirm(`Clear all ${MODE_INFO[mode].name} chat history?`)) {
      clearChatHistory(mode);
      setMessages([]);
    }
  };

  const modeColor = MODE_INFO[mode].color;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '500px',
      border: '1px solid #E5E7EB',
      borderRadius: '16px',
      overflow: 'hidden',
      backgroundColor: 'white'
    }}>
      {/* Header with mode indicator */}
      <div style={{
        padding: '16px',
        backgroundColor: modeColor,
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <span style={{ fontSize: '20px', marginRight: '8px' }}>
            {MODE_INFO[mode].emoji}
          </span>
          <span style={{ fontWeight: '600' }}>
            {MODE_INFO[mode].name} Mode
          </span>
        </div>
        <button
          onClick={handleClearChat}
          style={{
            padding: '6px 12px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Clear Chat
        </button>
      </div>

      {/* Messages area */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px',
        backgroundColor: '#F9FAFB'
      }}>
        {messages.length === 0 ? (
          <p style={{ 
            textAlign: 'center', 
            color: '#9CA3AF', 
            marginTop: '40px',
            fontSize: '14px'
          }}>
            Start chatting with your AI {MODE_INFO[mode].name.toLowerCase()}...
          </p>
        ) : (
          messages.map((msg, index) => (
            <ChatBubble key={index} message={msg.text} sender={msg.sender} />
          ))
        )}
        
        {/* Loading indicator with animated dots */}
        {isLoading && (
          <div style={{ 
            display: 'flex', 
            gap: '6px', 
            marginTop: '12px',
            marginLeft: '8px',
            alignItems: 'flex-end'
          }}>
            <div style={{ 
              backgroundColor: '#E5E7EB',
              borderRadius: '16px',
              padding: '12px 16px',
              display: 'flex',
              gap: '4px',
              alignItems: 'center'
            }}>
              <span className="loading-dot" style={{ 
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#6B7280'
              }}>●</span>
              <span className="loading-dot" style={{ 
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#6B7280',
                animationDelay: '0.2s'
              }}>●</span>
              <span className="loading-dot" style={{ 
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#6B7280',
                animationDelay: '0.4s'
              }}>●</span>
            </div>
          </div>
        )}

        {/* ✨ Invisible scroll anchor at bottom */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area with hint */}
      <ChatInput 
        onSend={handleSendMessage} 
        disabled={isGlobalLoading}
        placeholder={isGlobalLoading ? "AI is responding..." : "Type your message... (Press Enter to send)"}
      />
    </div>
  );
}

export default ChatContainer;