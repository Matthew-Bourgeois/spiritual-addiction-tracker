import React, { useState } from 'react';

const SevenDeadlySins = () => {
  // The Seven Deadly Sins and their Bible verses
  const sins = [
    { name: 'Pride', verse: 'Proverbs 16:18', isOvercome: false },
    { name: 'Envy', verse: 'James 3:16', isOvercome: false },
    { name: 'Wrath', verse: 'Ecclesiastes 7:9', isOvercome: false },
    { name: 'Lust', verse: '1 John 2:16', isOvercome: false },
    { name: 'Gluttony', verse: '1 Corinthians 6:19-20', isOvercome: false },
    { name: 'Greed', verse: 'Luke 12:15', isOvercome: false },
    { name: 'Sloth', verse: 'Proverbs 19:15', isOvercome: false },
  ];

  const [trackedSins, setTrackedSins] = useState(sins);

  // Function to handle marking a sin as overcome
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
    </div>
  );
};

export default SevenDeadlySins;
