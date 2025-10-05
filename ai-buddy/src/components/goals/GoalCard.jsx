// src/components/goals/GoalCard.jsx

function GoalCard({ goal, onComplete, onDelete }) {
  return (
    <div style={{
      padding: '16px',
      backgroundColor: 'white',
      borderRadius: '12px',
      border: '1px solid #E5E7EB',
      marginBottom: '12px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      {/* Goal Info */}
      <div style={{ flex: 1 }}>
        <h4 style={{ 
          fontSize: '16px', 
          fontWeight: '600',
          color: '#1F2937',
          marginBottom: '4px'
        }}>
          {goal.title}
        </h4>
        <div style={{ 
          fontSize: '14px', 
          color: '#6B7280',
          display: 'flex',
          gap: '12px',
          alignItems: 'center'
        }}>
          <span>🔥 Streak: {goal.streak} days</span>
          <span>📅 {goal.frequency}</span>
        </div>
      </div>
      
      {/* Actions */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={() => onComplete(goal.id)}
          disabled={goal.completed}
          style={{
            padding: '8px 16px',
            backgroundColor: goal.completed ? '#10B981' : '#4F46E5',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: goal.completed ? 'not-allowed' : 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          {goal.completed ? '✓ Done' : 'Complete'}
        </button>
        
        <button
          onClick={() => onDelete(goal.id)}
          style={{
            padding: '8px 12px',
            backgroundColor: '#EF4444',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default GoalCard;