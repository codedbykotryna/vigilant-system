// src/components/chat/ChatBubble.jsx

function ChatBubble({ message, sender, timestamp }) {
  const isUser = sender === 'user';
  
  // Format time nicely
  const formatTime = (time) => {
    if (!time) return '';
    const date = new Date(time);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: isUser ? 'flex-end' : 'flex-start',
      marginBottom: '16px'
    }}>
      <div style={{
        maxWidth: '70%',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
        <div style={{
          padding: '12px 16px',
          borderRadius: '16px',
          backgroundColor: isUser ? '#4F46E5' : '#E5E7EB',
          color: isUser ? 'white' : '#1F2937',
          wordWrap: 'break-word'
        }}>
          {message}
        </div>
        {timestamp && (
          <span style={{
            fontSize: '11px',
            color: '#9CA3AF',
            alignSelf: isUser ? 'flex-end' : 'flex-start',
            paddingLeft: isUser ? '0' : '8px',
            paddingRight: isUser ? '8px' : '0'
          }}>
            {formatTime(timestamp)}
          </span>
        )}
      </div>
    </div>
  );
}

export default ChatBubble;