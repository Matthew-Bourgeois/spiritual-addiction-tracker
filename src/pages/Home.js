import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

const Home = () => {
  const [logs, setLogs] = useState([]);
  const [lastLog, setLastLog] = useState(null);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  useEffect(() => {
    const storedLogs = JSON.parse(localStorage.getItem('sinLogs')) || [];
    setLogs(storedLogs);
    if (storedLogs.length > 0) {
      setLastLog(storedLogs[0]);
      const { currentStreak, bestStreak } = getStreaks(storedLogs);
      setCurrentStreak(currentStreak);
      setBestStreak(bestStreak);
    }
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
      <h2>Dashboard</h2>
      <p>Welcome back. Here's your spiritual check-in for today:</p>

      <div style={{ backgroundColor: '#222', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <p><strong>🔥 Current Streak:</strong> {currentStreak} day{currentStreak !== 1 ? 's' : ''}</p>
        <p><strong>🏅 Best Streak:</strong> {bestStreak} day{bestStreak !== 1 ? 's' : ''}</p>
      </div>

      {lastLog && (
        <div style={{ marginBottom: '2rem' }}>
          <h3>📝 Last Journal Entry</h3>
          <p><strong>{lastLog.date} - {lastLog.sin}</strong></p>
          <p><em>{lastLog.journal}</em></p>
          <p style={{ color: lastLog.overcame ? 'green' : 'red' }}>
            {lastLog.overcame ? '✅ Overcame' : '❌ Gave in'}
          </p>
          <p><strong>Verse:</strong> {lastLog.verse}</p>
        </div>
      )}

      <h3>Quick Links</h3>
      <ul>
        <li><Link to="/sin-log">📖 Daily Journal</Link></li>
        <li><Link to="/todo">🎯 Spiritual Goals</Link></li>
        <li><Link to="/contact">🧠 Reflection Request</Link></li>
      </ul>
    </div>
  );
};

export default Home;
