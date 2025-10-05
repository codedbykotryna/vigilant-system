// src/components/mood/ModeSelector.jsx

import { MODES, MODE_INFO } from '../../utils/constants';

function ModeSelector({ selectedMode, onModeChange }) {
  // selectedMode - which mode is currently active
  // onModeChange - function to call when user clicks a mode
  
  return (
    <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
      {/* Loop through each mode and create a button */}
      {Object.values(MODES).map((mode) => {
        const info = MODE_INFO[mode];
        const isSelected = selectedMode === mode;
        
        return (
          <button
            key={mode}
            onClick={() => onModeChange(mode)}
            style={{
              padding: '16px 24px',
              border: isSelected ? `3px solid ${info.color}` : '2px solid #E5E7EB',
              borderRadius: '12px',
              backgroundColor: isSelected ? `${info.color}20` : 'white',
              cursor: 'pointer',
              flex: 1,
              textAlign: 'center',
              transition: 'all 0.2s'
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>
              {info.emoji}
            </div>
            <div style={{ 
              fontSize: '18px', 
              fontWeight: isSelected ? 'bold' : 'normal',
              color: isSelected ? info.color : '#374151'
            }}>
              {info.name}
            </div>
            <div style={{ fontSize: '14px', color: '#6B7280', marginTop: '4px' }}>
              {info.description}
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default ModeSelector;