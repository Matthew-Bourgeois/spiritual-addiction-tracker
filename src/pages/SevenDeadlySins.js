import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialSins = [
  { name: 'Pride', verse: 'Proverbs 16:18', isOvercome: false },
  { name: 'Envy', verse: 'James 3:16', isOvercome: false },
  { name: 'Wrath', verse: 'Ecclesiastes 7:9', isOvercome: false },
  { name: 'Lust', verse: '1 John 2:16', isOvercome: false },
  { name: 'Gluttony', verse: '1 Corinthians 6:19-20', isOvercome: false },
  { name: 'Greed', verse: 'Luke 12:15', isOvercome: false },
  { name: 'Sloth', verse: 'Proverbs 19:15', isOvercome: false },
];

const SevenDeadlySins = () => {
  const navigate = useNavigate();
  const [sins, setSins] = useState(initialSins);

  const toggleOvercome = (index) => {
    const updated = [...sins];
    updated[index].isOvercome = !updated[index].isOvercome;
    setSins(updated);
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>The Seven Deadly Sins</h2>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {sins.map((sin, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <div>
              <strong>{sin.name}</strong>
              <p>{sin.verse}</p>
              <button onClick={() => toggleOvercome(index)}>
                {sin.isOvercome ? 'Overcome' : 'Struggling'}
              </button>
              {sin.isOvercome && (
                <p style={{ color: 'green', fontStyle: 'italic' }}>
                  You've overcome this sin! Keep growing in the Lord.
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default SevenDeadlySins;
