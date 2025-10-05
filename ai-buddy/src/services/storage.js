// src/services/storage.js

const GOALS_KEY = 'ai_buddy_goals';
const CHAT_KEY = 'ai_buddy_chat_history';

// Get all goals from localStorage
export function getGoals() {
  const stored = localStorage.getItem(GOALS_KEY);
  return stored ? JSON.parse(stored) : [];
}

// Save goals to localStorage
export function saveGoals(goals) {
  localStorage.setItem(GOALS_KEY, JSON.stringify(goals));
}

// Add a new goal
export function addGoal(goal) {
  const goals = getGoals();
  const newGoal = {
    id: Date.now().toString(),
    title: goal.title,
    frequency: goal.frequency || 'daily', // daily, weekly, custom
    streak: 0,
    completed: false,
    createdAt: new Date().toISOString(),
    lastCompleted: null
  };
  
  goals.push(newGoal);
  saveGoals(goals);
  return newGoal;
}

// Update goal (mark complete, update streak)
export function updateGoal(goalId, updates) {
  const goals = getGoals();
  const index = goals.findIndex(g => g.id === goalId);
  
  if (index !== -1) {
    goals[index] = { ...goals[index], ...updates };
    saveGoals(goals);
    return goals[index];
  }
  return null;
}

// Delete a goal
export function deleteGoal(goalId) {
  const goals = getGoals();
  const filtered = goals.filter(g => g.id !== goalId);
  saveGoals(filtered);
}

// Mark goal as completed (increment streak)
export function completeGoal(goalId) {
  const goals = getGoals();
  const goal = goals.find(g => g.id === goalId);
  
  if (goal) {
    goal.streak += 1;
    goal.lastCompleted = new Date().toISOString();
    goal.completed = true;
    saveGoals(goals);
    return goal;
  }
  return null;
}

// ========== CHAT HISTORY FUNCTIONS ==========

// Get chat history for a specific mode
export function getChatHistory(mode) {
  const allHistory = localStorage.getItem(CHAT_KEY);
  const history = allHistory ? JSON.parse(allHistory) : {};
  return history[mode] || [];
}

// Save chat history for a specific mode
export function saveChatHistory(mode, messages) {
  const allHistory = localStorage.getItem(CHAT_KEY);
  const history = allHistory ? JSON.parse(allHistory) : {};
  history[mode] = messages;
  localStorage.setItem(CHAT_KEY, JSON.stringify(history));
}

// Clear chat history for a specific mode
export function clearChatHistory(mode) {
  const allHistory = localStorage.getItem(CHAT_KEY);
  const history = allHistory ? JSON.parse(allHistory) : {};
  history[mode] = [];
  localStorage.setItem(CHAT_KEY, JSON.stringify(history));
}