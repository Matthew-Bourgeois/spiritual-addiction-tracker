import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ⬇ Move this outside the component so it only runs once
const initialSins = [
  { name: 'Pride', verse: 'Proverbs 16:18 - Pride goes before destruction, a haughty spirit before a fall.', isOvercome: false },
  { name: 'Envy', verse: 'James 3:16 - For where you have envy and selfish ambition, there you find disorder and every evil practice.', isOvercome: false },
  { name: 'Wrath', verse: 'Ecclesiastes 7:9 - Do not be quickly provoked in your spirit, for anger resides in the lap of fools.', isOvercome: false },
  { name: 'Lust', verse: '1 John 2:16 - For everything in the world—the lust of the flesh, the lust of the eyes, and the pride of life—comes not from the Father but from the world.', isOvercome: false },
  { name: 'Gluttony', verse: '1 Corinthians 6:19-20 - Do you not know that your bodies are temples of the Holy Spirit?', isOvercome: false },
  { name: 'Greed', verse: 'Luke 12:15 - Watch out! Be on your guard against all kinds of greed; life does not consist in an abundance of possessions.', isOvercome: false },
  { name: 'Sloth', verse: 'Proverbs 19:15 - Laziness brings on deep sleep, and the shiftless go hungry.', isOvercome: false },
];

const SevenDeadlySins = () => {
  const navigate = useNavigate();
  const [trackedSins, setTrackedSins] = useState(initialSins);

  const handleOvercome = (index) => {
    const updatedSins = [...trackedSins];
    updatedSins[index].isOvercome = !updatedSins[index].isOvercome;
    setTrackedSins(updatedSins);
  };

  return (
    <div>
      <h2>The Seven Deadly Sins</h2>
      <ul>
        {trackedSins.map((sin, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <div>
              <strong>{sin.name}</strong>
              <p>Associated Bible Verse: {sin.verse}</p>
              <button onClick={() => handleOvercome(index)}>
                {sin.isOvercome ? 'Overcome' : 'Struggling'}
              </button>
            </div>
            {sin.isOvercome && (
              <p style={{ color: 'green', fontStyle: 'italic' }}>
                You've overcome this sin! Keep growing in the Lord.
              </p>
            )}
          </li>
        ))}
      </ul>

      {/* Back Button */}
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default SevenDeadlySins;
