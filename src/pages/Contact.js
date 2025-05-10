import React, { useState } from 'react';

const verseMap = {
  lust: {
    keywords: ["lust", "porn", "impure", "temptation", "sexual"],
    verse: "1 John 2:16 - The lust of the flesh... comes not from the Father but from the world."
  },
  pride: {
    keywords: ["pride", "arrogant", "boast", "selfish"],
    verse: "Proverbs 16:18 - Pride goes before destruction, a haughty spirit before a fall."
  },
  envy: {
    keywords: ["envy", "jealous", "comparison", "covet"],
    verse: "Proverbs 14:30 - A heart at peace gives life to the body, but envy rots the bones."
  },
  wrath: {
    keywords: ["anger", "mad", "rage", "wrath"],
    verse: "Ephesians 4:31 - Let all bitterness and wrath and anger be put away from you."
  },
  greed: {
    keywords: ["greed", "money", "rich", "materialism"],
    verse: "Luke 12:15 - Watch out! Be on your guard against all kinds of greed..."
  },
  sloth: {
    keywords: ["lazy", "sloth", "unmotivated", "tired", "procrastinate"],
    verse: "Proverbs 13:4 - The soul of the sluggard craves and gets nothing..."
  },
  gluttony: {
    keywords: ["gluttony", "overeat", "food", "drink", "binging"],
    verse: "Proverbs 23:20–21 - Do not join those who drink too much wine or gorge themselves..."
  },
  fear: {
    keywords: ["fear", "afraid", "scared", "worried"],
    verse: "Isaiah 41:10 - Do not fear, for I am with you."
  },
  anxiety: {
    keywords: ["anxious", "stress", "panic", "anxiety"],
    verse: "Philippians 4:6 - Do not be anxious about anything, but in every situation, by prayer and petition..."
  },
  doubt: {
    keywords: ["doubt", "unsure", "confused", "unbelief"],
    verse: "James 1:6 - But when you ask, you must believe and not doubt..."
  }
};

const fallbackVerse = "Psalm 34:18 - The Lord is close to the brokenhearted and saves those who are crushed in spirit.";

const Contact = () => {
  const [message, setMessage] = useState('');
  const [verse, setVerse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const loweredMessage = message.toLowerCase();
    let found = null;

    for (const topic in verseMap) {
      const { keywords, verse: matchedVerse } = verseMap[topic];
      if (keywords.some(keyword => loweredMessage.includes(keyword))) {
        found = matchedVerse;
        break;
      }
    }

    setVerse(found || fallbackVerse);
    setMessage('');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
      <h2>Submit a Reflection</h2>
      <p>Write about your current struggle, temptation, or moment of growth. You'll receive a Bible verse to encourage you.</p>

      <form onSubmit={handleSubmit}>
        <textarea
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What are you reflecting on today?"
          required
          style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}
        />
        <button type="submit" style={{ marginTop: '1rem' }}>Submit</button>
      </form>

      {verse && (
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#222', borderRadius: '5px' }}>
          <h3>Verse for You:</h3>
          <p style={{ fontStyle: 'italic', color: '#f39c12' }}>{verse}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
