import './App.css'
import { useState } from 'react';
import { MODES } from './utils/constants';
import ModeSelector from './components/mood/MoodSelector';

function App() {
  // This function runs when button is clicked
  const [currentMode, setCurrentMode] = useState(MODES.COMPANION);

  return(
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '32px' }}>AI Buddy</h1>
      
      {/* Mode Selector - user chooses mode */}
      <ModeSelector 
        selectedMode={currentMode}
        onModeChange={setCurrentMode}
      />
      
      {/* Show which mode is active */}
      <p style={{ marginTop: '24px', color: '#6B7280' }}>
        Current mode: <strong>{currentMode}</strong>
      </p>
    </div>
  );
}

export default App;
