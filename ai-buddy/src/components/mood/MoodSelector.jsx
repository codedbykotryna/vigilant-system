// src/components/mood/MoodSelector.jsx

const MOODS = [
  { emoji: '😊', label: 'Happy', value: 'happy' },
  { emoji: '😔', label: 'Sad', value: 'sad' },
  { emoji: '😰', label: 'Anxious', value: 'anxious' },
  { emoji: '😴', label: 'Tired', value: 'tired' },
  { emoji: '😡', label: 'Angry', value: 'angry' },
  { emoji: '🤔', label: 'Curious', value: 'curious' }
];

function MoodSelector({ selectedMood, onMoodChange }) {
  return (
    <div>
      <h3 style={{ 
        marginBottom: '16px', 
        color: '#1F2937',
        fontSize: '18px',
        fontWeight: '600'
      }}>
        How are you feeling?
      </h3>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        {MOODS.map((mood) => (
          <button
            key={mood.value}
            onClick={() => onMoodChange(mood.value)}
            style={{
              padding: '12px 20px',
              border: 'none',
              borderRadius: '8px',
              backgroundColor: selectedMood === mood.value ? '#4F46E5' : '#F3F4F6',
              color: selectedMood === mood.value ? 'white' : '#374151',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease',
              fontWeight: selectedMood === mood.value ? '600' : 'normal'
            }}
          >
            <span style={{ fontSize: '20px' }}>{mood.emoji}</span>
            <span style={{ fontSize: '14px' }}>{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoodSelector;