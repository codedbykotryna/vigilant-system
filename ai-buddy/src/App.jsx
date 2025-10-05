// src/App.jsx

import { useState } from 'react';
import ModeSelector from './components/mood/ModeSelector';
import MoodSelector from './components/mood/MoodSelector';
import ChatContainer from './components/chat/ChatContainer';
import GoalsPanel from './components/goals/GoalsPanel';
import { MODES } from './utils/constants';

function App() {
  const [currentMode, setCurrentMode] = useState(MODES.COMPANION);
  const [currentMood, setCurrentMood] = useState('happy');
  const [isAnyLoading, setIsAnyLoading] = useState(false);

  return (
    <div style={{ 
      minHeight: '100vh',
      padding: '40px 20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ 
        maxWidth: '1000px', 
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        padding: '40px',
        minHeight: '80vh'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '36px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '8px'
          }}>
            AI Buddy
          </h1>
          <p style={{ color: '#6B7280', fontSize: '14px' }}>
            Your personal companion, mentor, and teacher
          </p>
        </div>
        
        {/* Mode Selector */}
        <ModeSelector 
          selectedMode={currentMode}
          onModeChange={setCurrentMode}
        />
        
        {/* Mood Selector with Current Mood Display */}
        <div style={{ marginBottom: '24px' }}>
          <MoodSelector 
            selectedMood={currentMood}
            onMoodChange={setCurrentMood}
          />
          <div style={{
            marginTop: '12px',
            padding: '12px 16px',
            backgroundColor: '#F3F4F6',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px'
          }}>
            <span style={{ color: '#6B7280' }}>Current mood:</span>
            <span style={{ 
              color: '#4F46E5', 
              fontWeight: '600',
              textTransform: 'capitalize'
            }}>
              {currentMood}
            </span>
          </div>
        </div>
        
        {/* Chat Interface */}
        <ChatContainer 
          mode={currentMode} 
          mood={currentMood}
          isGlobalLoading={isAnyLoading}
          setGlobalLoading={setIsAnyLoading}
        />
        
        {/* Goals Panel - Only show in Mentor mode */}
        {currentMode === MODES.MENTOR && <GoalsPanel />}
      </div>
    </div>
  );
}

export default App;