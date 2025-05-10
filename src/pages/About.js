import React from 'react';

const About = () => {
  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'left',
      padding: '2rem',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '10px',
      boxShadow: '0 0 15px rgba(255, 223, 186, 0.3)',
      lineHeight: '1.8',
    }}>
      <h2 style={{ fontSize: '2rem', color: '#f39c12', marginBottom: '1.5rem' }}>
        About the Spiritual Addiction Tracker
      </h2>

      <p style={{ marginBottom: '1.5rem' }}>
        This app was created to help individuals battling spiritual addiction — not just to substances or habits,
        but to destructive patterns like lust, pride, envy, wrath, gluttony, greed, and sloth.
      </p>

      <p style={{ marginBottom: '1.5rem' }}>
        It's a safe space for reflection, growth, and restoration. Whether you’re overcoming temptation,
        recovering from a fall, or striving to walk more closely with Christ, this tool supports you in:
      </p>

      <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>📖 Journaling your spiritual battles and victories</li>
        <li style={{ marginBottom: '0.75rem' }}>🙏 Submitting reflections and receiving Bible-based encouragement</li>
        <li style={{ marginBottom: '0.75rem' }}>🎯 Setting spiritual goals like prayer, fasting, and Bible study</li>
        <li style={{ marginBottom: '0.75rem' }}>📈 Tracking growth and building holy habits over time</li>
      </ul>

      <p style={{ marginBottom: '1.5rem' }}>
        More than a habit tracker, this is a faith tool grounded in Scripture. It’s here to remind you that no matter
        how far you’ve fallen, God’s grace is always greater.
      </p>

      <p style={{ fontStyle: 'italic', color: '#2ecc71', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        "The righteous fall seven times, and rise again." — Proverbs 24:16
      </p>

      <p style={{ marginBottom: '1.5rem' }}>
        This app also points to the ultimate truth: salvation is not earned by perfection — it's received by believing
        in the One who is perfect.
      </p>

      <p style={{
        fontWeight: 'bold',
        fontSize: '1.2rem',
        color: '#f1c40f',
        fontStyle: 'italic',
        marginBottom: '1.5rem',
      }}>
        “For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish
        but have eternal life.” — John 3:16
      </p>

      <p>
        If you’ve never received Jesus, let this moment be your turning point. He’s not waiting for you to be perfect —
        just to say yes.
      </p>
    </div>
  );
};

export default About;
