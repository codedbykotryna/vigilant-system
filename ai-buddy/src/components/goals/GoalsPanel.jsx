// src/components/goals/GoalsPanel.jsx

import { useState, useEffect } from 'react';
import GoalCard from './GoalCard';
import AddGoalForm from './AddGoalForm';
import { getGoals, addGoal, completeGoal, deleteGoal } from '../../services/storage';

function GoalsPanel() {
  const [goals, setGoals] = useState([]);
  
  // Load goals on mount
  useEffect(() => {
    setGoals(getGoals());
  }, []);
  
  const handleAddGoal = (goalData) => {
    const newGoal = addGoal(goalData);
    setGoals([...goals, newGoal]);
  };
  
  const handleCompleteGoal = (goalId) => {
    const updated = completeGoal(goalId);
    if (updated) {
      setGoals(goals.map(g => g.id === goalId ? updated : g));
    }
  };
  
  const handleDeleteGoal = (goalId) => {
    deleteGoal(goalId);
    setGoals(goals.filter(g => g.id !== goalId));
  };
  
  return (
    <div style={{
      marginTop: '24px',
      padding: '20px',
      backgroundColor: '#F3F4F6',
      borderRadius: '16px'
    }}>
      <h2 style={{ 
        marginBottom: '16px',
        fontSize: '20px',
        fontWeight: '700',
        color: '#1F2937'
      }}>
        🎯 Your Goals & Habits
      </h2>
      
      <AddGoalForm onAdd={handleAddGoal} />
      
      {goals.length === 0 ? (
        <p style={{ 
          textAlign: 'center', 
          color: '#9CA3AF',
          padding: '20px',
          fontSize: '14px'
        }}>
          No goals yet. Add your first goal above!
        </p>
      ) : (
        <div>
          {goals.map(goal => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onComplete={handleCompleteGoal}
              onDelete={handleDeleteGoal}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default GoalsPanel;