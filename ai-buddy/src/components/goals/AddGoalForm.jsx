// src/components/goals/AddGoalForm.jsx

import { useState } from 'react';

function AddGoalForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [frequency, setFrequency] = useState('daily');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (title.trim()) {
      onAdd({ title, frequency });
      setTitle('');
      setFrequency('daily');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} style={{
      marginBottom: '20px',
      padding: '16px',
      backgroundColor: '#F9FAFB',
      borderRadius: '12px',
      border: '1px solid #E5E7EB'
    }}>
      <h3 style={{ 
        marginBottom: '12px', 
        fontSize: '16px',
        fontWeight: '600',
        color: '#1F2937'
      }}>
        Add New Goal
      </h3>
      
      <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Go to gym, Read 30 pages..."
          style={{
            flex: 1,
            padding: '10px 12px',
            border: '1px solid #D1D5DB',
            borderRadius: '8px',
            fontSize: '14px',
            outline: 'none'
          }}
        />
        
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          style={{
            padding: '10px 12px',
            border: '1px solid #D1D5DB',
            borderRadius: '8px',
            fontSize: '14px',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="custom">Custom</option>
        </select>
        
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#8B5CF6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          Add Goal
        </button>
      </div>
    </form>
  );
}

export default AddGoalForm;