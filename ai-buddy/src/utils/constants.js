
export const MODES = {
    COMPANION: 'companion',
    MENTOR: 'mentor',
    TEACHER: 'teacher'
};

export const MODE_INFO ={
    [MODES.COMPANION]:{
        name: 'Companion',
        emoji: '🤗',
        description: 'Chat when you feel lonely or anxious',
        color: '#EC4899'
    },
  [MODES.MENTOR]: {
    name: 'Mentor',
    emoji: '🎯',
    description: 'Track goals and build habits',
    color: '#8B5CF6' // Purple
  },
  [MODES.TEACHER]: {
    name: 'Teacher',
    emoji: '📚',
    description: 'Learn and stay informed',
    color: '#3B82F6' // Blue
  }
};