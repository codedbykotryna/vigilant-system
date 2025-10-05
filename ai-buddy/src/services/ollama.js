// src/services/ollama.js

const OLLAMA_URL = 'http://localhost:11434/api/chat';

// System prompts for each mode
const SYSTEM_PROMPTS = {
  companion: 'You are a friendly, empathetic companion. Provide emotional support and casual conversation. Keep responses warm and understanding.',
  mentor: 'You are a supportive mentor helping with goals and habits. Give practical advice, motivation, and track progress. Be encouraging.',
  teacher: 'You are a knowledgeable teacher. Explain concepts clearly, provide summaries, and help users learn. Be informative and concise.'
};

// Mood-based adjustments
const MOOD_ADJUSTMENTS = {
  happy: 'The user is feeling happy. Match their positive energy!',
  sad: 'The user is feeling sad. Be extra gentle, comforting, and supportive.',
  anxious: 'The user is feeling anxious. Be calming, reassuring, and patient.',
  tired: 'The user is feeling tired. Keep responses brief and soothing.',
  angry: 'The user is feeling angry. Be understanding and help them process their feelings.',
  curious: 'The user is feeling curious. Be engaging and informative.'
};

export async function sendMessage(userMessage, mode = 'companion', mood = 'happy') {
  try {
    const systemPrompt = `${SYSTEM_PROMPTS[mode]} ${MOOD_ADJUSTMENTS[mood]}`;
    
    const response = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3:8b',  // Your actual model
        messages: [
          {
            role: 'system',
            content: SYSTEM_PROMPTS[mode]
          },
          {
            role: 'user',
            content: userMessage
          }
        ],
        stream: false
      })
    });

    const data = await response.json();
    return data.message.content;
    
  } catch (error) {
    console.error('Ollama error:', error);
    return 'Sorry, I had trouble connecting. Is Ollama running?';
  }
}