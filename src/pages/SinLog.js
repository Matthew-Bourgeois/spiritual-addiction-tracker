import React, { useState, useEffect } from 'react';

// 🔄 Bible verses for each sin
const sinVerses = {
  Pride: 'Proverbs 16:18 - Pride goes before destruction, a haughty spirit before a fall.',
  Envy: 'James 3:16 - For where you have envy and selfish ambition, there you find disorder...',
  Wrath: 'Ecclesiastes 7:9 - Do not be quickly provoked in your spirit...',
  Lust: '1 John 2:16 - The lust of the flesh... comes not from the Father but from the world.',
  Gluttony: '1 Corinthians 6:19-20 - Your body is a temple of the Holy Spirit...',
  Greed: 'Luke 12:15 - Be on your guard against all kinds of greed...',
  Sloth: 'Proverbs 19:15 - Laziness brings on deep sleep, and the shiftless go hungry.'
};

// 🔢 Streak calculation
const getStreaks = (logs) => {
  let currentStreak = 0;
  let bestStreak = 0;
  let tempStreak = 0;

  for (let i = 0; i < logs.length; i++) {
    if (logs[i].overcame) {
      tempStreak++;
      if (i === 0) currentStreak++;
      bestStreak = Math.max(bestStreak, tempStreak);
    } else {
      if (i === 0) currentStreak = 0;
      tempStreak = 0;
    }
  }

  return { currentStreak, bestStreak };
};

const SinLog = () => {
  const [sin, setSin] = useState('');
  const [journal, setJournal] = useState('');
  const [overcame, setOvercame] = useState(false);
  const [logs, setLogs] = useState(() => {
    const saved = localStorage.getItem('sinLogs');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('All');

  const { currentStreak, bestStreak } = getStreaks(logs);

  useEffect(() => {
    localStorage.setItem('sinLogs', JSON.stringify(logs));
  }, [logs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sin && journal.trim()) {
      const newLog = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        sin,
        journal,
        overcame,
        verse: sinVerses[sin]
      };
      setLogs([newLog, ...logs]);
      setSin('');
      setJournal('');
      setOvercame(false);
    }
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'left' }}>
      <h2>Daily Sin Tracker</h2>

      {/* 🔥 Streak Info */}
      <div style={{ marginBottom: '1rem' }}>
        <p>🔥 <strong>Current Streak:</strong> {currentStreak} day{currentStreak !== 1 ? 's' : ''}</p>
        <p>🏅 <strong>Best Streak:</strong> {bestStreak} day{bestStreak !== 1 ? 's' : ''}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Sin Category:</label>
        <select value={sin} onChange={(e) => setSin(e.target.value)} required>
          <option value="">-- Select a sin --</option>
          {Object.keys(sinVerses).map((key) => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>

        <label>Short Journal Entry:</label>
        <textarea
          rows="4"
          value={journal}
          onChange={(e) => setJournal(e.target.value)}
          placeholder="Describe what happened..."
          required
        />

        <label>
          <input
            type="checkbox"
            checked={overcame}
            onChange={(e) => setOvercame(e.target.checked)}
          />
          I overcame the temptation today
        </label>

        <button type="submit">Log Entry</button>
      </form>

      <hr />

      {/* Filter */}
      <label>Filter by Sin:</label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        {Object.keys(sinVerses).map((sin) => (
          <option key={sin} value={sin}>{sin}</option>
        ))}
      </select>

      {/* History */}
      <h3>My History</h3>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {logs
          .filter(log => filter === 'All' || log.sin === filter)
          .map((log) => (
            <li key={log.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
              <strong>{log.date} - {log.sin}</strong>
              <p><em>{log.journal}</em></p>
              <p style={{ color: log.overcame ? 'green' : 'red' }}>
                {log.overcame ? '✅ Overcame' : '❌ Gave in'}
              </p>
              <p><strong>Verse:</strong> {log.verse}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SinLog;

