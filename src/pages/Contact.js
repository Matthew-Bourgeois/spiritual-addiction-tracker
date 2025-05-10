import React, { useState } from 'react';

const verseMap = {
  lust: '1 John 2:16 - The lust of the flesh... comes not from the Father but from the world.',
  pride: 'Proverbs 16:18 - Pride goes before destruction, a haughty spirit before a fall.',
  envy: 'Proverbs 14:30 - A heart at peace gives life to the body, but envy rots the bones.',
  wrath: 'Ephesians 4:31 - Let all bitterness and wrath and anger be put away from you...',
  greed: 'Luke 12:15 - Watch out! Be on your guard against all kinds of greed...',
  sloth: 'Proverbs 13:4 - The soul of the sluggard craves and gets nothing...',
  gluttony: 'Proverbs 23:20–21 - Do not join those who drink too much wine...',
  fear: 'Isaiah 41:10 - Do not fear, for I am with you.',
  anxiety: 'Philippians 4:6 - Do not be anxious about anything...'
};

const Contact = () => {
  const [message, setMessage] = useState('');
  const [verse, setVerse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundKey = Object.keys(verseMap).find((keyword) =>
      message.toLowerCase().includes(keyword)
    );

    if (foundKey) {
      setVerse(verseMap[foundKey]);
    } else {
      setVerse("Thank you for sharing. Stay strong and faithful — God sees your heart.");
    }

    setMessage('');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
      <h2>Submit a Reflection</h2>
      <p>Write about your current struggle, temptation, or moment of growth. You’ll receive a Bible verse or encouragement.</p>

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
