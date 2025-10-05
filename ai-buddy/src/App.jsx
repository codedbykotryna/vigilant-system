import './App.css'
import { useState } from 'react';
import { MODES } from './utils/constants';
import ModeSelector from './components/mood/MoodSelector';
import ChatContainer from './components/chat/ChatContainer';

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

      {/* Chat Interface */}
      <ChatContainer mode={currentMode} />
      
    </div>
  );
}

export default App;
