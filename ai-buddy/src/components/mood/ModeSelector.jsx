// src/components/mood/ModeSelector.jsx

import { MODES, MODE_INFO } from '../../utils/constants';

function ModeSelector({ selectedMode, onModeChange }) {
  
  return (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{ 
        marginBottom: '16px', 
        color: '#1F2937',
        fontSize: '18px',
        fontWeight: '600'
      }}>
        Choose your mode
      </h3>
      <div style={{ display: 'flex', gap: '16px' }}>
        {Object.values(MODES).map((mode) => {
          const info = MODE_INFO[mode];
          const isSelected = selectedMode === mode;
          
          return (
            <button
              key={mode}
              onClick={() => onModeChange(mode)}
              style={{
                padding: '20px',
                border: 'none',
                borderRadius: '12px',
                backgroundColor: isSelected ? info.color : '#F9FAFB',
                color: isSelected ? 'white' : '#374151',
                cursor: 'pointer',
                flex: 1,
                textAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: isSelected ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
                transform: isSelected ? 'translateY(-2px)' : 'none'
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>
                {info.emoji}
              </div>
              <div style={{ 
                fontSize: '16px', 
                fontWeight: '600',
                marginBottom: '4px'
              }}>
                {info.name}
              </div>
              <div style={{ 
                fontSize: '12px', 
                opacity: isSelected ? 0.9 : 0.6
              }}>
                {info.description}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ModeSelector;