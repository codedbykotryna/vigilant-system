function Button({text, onClick})
{
    return (
        <button 
        onClick={onClick}
        style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#4F46E5',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
        }}
        >
        {text}
        </button>
    );
}

// Export so other files can use it
export default Button;