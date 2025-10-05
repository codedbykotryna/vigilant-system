function ChatBubble({message, sender}){
    const isUser = sender == 'user';

     return (
    <div style={{
      display: 'flex',
      justifyContent: isUser ? 'flex-end' : 'flex-start',  // User right, AI left
      marginBottom: '16px'
    }}>
      <div style={{
        maxWidth: '70%',
        padding: '12px 16px',
        borderRadius: '16px',
        backgroundColor: isUser ? '#4F46E5' : '#E5E7EB',  // User blue, AI gray
        color: isUser ? 'white' : '#1F2937',
        wordWrap: 'break-word'
      }}>
        {message}
      </div>
    </div>
  );
}

export default ChatBubble;