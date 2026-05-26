import React from 'react';

const LeagueWebsite = () => {
  const stats = [
    { number: '~30', label: 'UK Student Investment Funds' },
    { number: '£10M+', label: 'Combined Assets Under Management' },
    { number: '500+', label: 'Student Fund Managers Nationally' }
  ];

  const valueProps = [
    {
      icon: '🏆',
      title: 'National Competition',
      description: 'Universities compete on verified monthly returns. Fair comparison regardless of fund size through percentage-based rankings.'
    },
    {
      icon: '✓',
      title: 'Verified Performance',
      description: 'Faculty adviser confirmation required. Screenshot verification. Transparent, objective metrics that prove real investing ability.'
    },
    {
      icon: '🎯',
      title: 'Recruitment Visibility',
      description: 'Top performers flagged to sponsor firms monthly. National ranking provides concrete proof of skill for interviews and applications.'
    }
  ];

  const leagueData = [
    { rank: 1, fundName: 'York Griff Fund', university: 'University of York', ytdReturn: '+12.3%', sharpeRatio: '1.45', aum: '£42,000' },
    { rank: 2, fundName: "Queen's Student Managed Fund", university: "Queen's University Belfast", ytdReturn: '+11.8%', sharpeRatio: '1.38', aum: '£85,000' },
    { rank: 3, fundName: 'Imperial Student Investment Fund', university: 'Imperial College London', ytdReturn: '+10.2%', sharpeRatio: '1.22', aum: '£100,000' },
    { rank: 4, fundName: 'CamSIF', university: 'University of Cambridge', ytdReturn: '+9.7%', sharpeRatio: '1.15', aum: '£25,000' },
    { rank: 5, fundName: 'QUMMIF', university: 'Queen Mary University', ytdReturn: '+8.9%', sharpeRatio: '1.08', aum: '£40,000' }
  ];

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@400;500;700&display=swap');
        
        :root {
          --navy: #1a2332;
          --navy-light: #2d3e52;
          --gold: #d4af37;
          --cream: #faf8f3;
          --grey: #6b7280;
          --white: #ffffff;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }
        
        .nav-fixed {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(26, 35, 50, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }
        
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
        }
        
        .logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--white);
          letter-spacing: 0.5px;
        }
        
        .nav-links {
          display: flex;
          gap: 3rem;
          list-style: none;
        }
        
        .nav-links a {
          color: var(--cream);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.3s ease;
          letter-spacing: 0.3px;
        }
        
        .nav-links a:hover {
          color: var(--gold);
        }
        
        .hero {
          margin-top: 80px;
          min-height: 85vh;
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: 
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 50px,
              rgba(212, 175, 55, 0.03) 50px,
              rgba(212, 175, 55, 0.03) 100px
            );
        }
        
        .hero-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem;
          position: relative;
          z-index: 1;
        }
        
        .hero-badge {
          display: inline-block;
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid var(--gold);
          color: var(--gold);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 2rem;
          animation: fadeInUp 0.8s ease forwards;
        }
        
        .hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5rem;
          font-weight: 700;
          color: var(--white);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          max-width: 900px;
          animation: fadeInUp 0.8s ease 0.2s forwards;
          opacity: 0;
        }
        
        .hero-subtitle {
          font-size: 1.4rem;
          color: var(--cream);
          max-width: 700px;
          margin-bottom: 3rem;
          line-height: 1.7;
          animation: fadeInUp 0.8s ease 0.4s forwards;
          opacity: 0;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          animation: fadeInUp 0.8s ease 0.6s forwards;
          opacity: 0;
        }
        
        .btn {
          padding: 1rem 2.5rem;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          letter-spacing: 0.3px;
        }
        
        .btn-primary {
          background: var(--gold);
          color: var(--navy);
          box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
        }
        
        .btn-primary:hover {
          background: #c19b2b;
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(212, 175, 55, 0.4);
        }
        
        .btn-secondary {
          background: transparent;
          color: var(--white);
          border: 2px solid var(--white);
        }
        
        .btn-secondary:hover {
          background: var(--white);
          color: var(--navy);
          transform: translateY(-2px);
        }
        
        .stats {
          background: var(--white);
          padding: 5rem 2rem;
          border-top: 3px solid var(--gold);
        }
        
        .stats-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
        }
        
        .stat-item {
          text-align: center;
          padding: 2rem;
          animation: fadeIn 1s ease forwards;
          opacity: 0;
        }
        
        .stat-item:nth-child(1) { animation-delay: 0.2s; }
        .stat-item:nth-child(2) { animation-delay: 0.4s; }
        .stat-item:nth-child(3) { animation-delay: 0.6s; }
        
        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 4rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 1.1rem;
          color: var(--grey);
          font-weight: 500;
        }
        
        .value-props {
          background: var(--cream);
          padding: 6rem 2rem;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .section-subtitle {
          color: var(--gold);
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1rem;
        }
        
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 700;
          color: var(--navy);
        }
        
        .props-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }
        
        .prop-card {
          background: var(--white);
          padding: 3rem;
          border-left: 4px solid var(--gold);
          transition: all 0.3s ease;
        }
        
        .prop-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(26, 35, 50, 0.08);
        }
        
        .prop-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--navy), var(--navy-light));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          font-size: 1.8rem;
        }
        
        .prop-card h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 1rem;
        }
        
        .prop-card p {
          color: var(--grey);
          line-height: 1.8;
        }
        
        .league-preview {
          background: var(--navy);
          padding: 6rem 2rem;
          color: var(--white);
        }
        
        .league-preview .section-subtitle {
          color: var(--gold);
        }
        
        .league-preview .section-title {
          color: var(--white);
        }
        
        .table-container {
          max-width: 1400px;
          margin: 3rem auto 0;
          background: var(--white);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
        }
        
        thead {
          background: var(--navy-light);
          color: var(--cream);
        }
        
        th {
          padding: 1.5rem;
          text-align: left;
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        tbody tr {
          border-bottom: 1px solid #e5e7eb;
          transition: background 0.2s ease;
        }
        
        tbody tr:hover {
          background: #f9fafb;
        }
        
        td {
          padding: 1.5rem;
          color: var(--navy);
          font-size: 0.95rem;
        }
        
        .rank {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--gold);
        }
        
        .fund-name {
          font-weight: 600;
          color: var(--navy);
        }
        
        .return-positive {
          color: #059669;
          font-weight: 600;
        }
        
        .cta-section {
          background: var(--gold);
          padding: 6rem 2rem;
          text-align: center;
        }
        
        .cta-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .cta-section h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 1.5rem;
        }
        
        .cta-section p {
          font-size: 1.2rem;
          color: var(--navy);
          margin-bottom: 2.5rem;
          opacity: 0.9;
        }
        
        .cta-section .btn {
          background: var(--navy);
          color: var(--white);
          font-size: 1.1rem;
          padding: 1.2rem 3rem;
        }
        
        .cta-section .btn:hover {
          background: var(--navy-light);
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(26, 35, 50, 0.3);
        }
        
        footer {
          background: var(--navy);
          color: var(--cream);
          padding: 3rem 2rem;
          text-align: center;
        }
        
        footer p {
          opacity: 0.8;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @media (max-width: 1024px) {
          .hero h1 { font-size: 3.5rem; }
          .stats-container, .props-grid { grid-template-columns: 1fr; }
        }
        
        @media (max-width: 768px) {
          .hero h1 { font-size: 2.5rem; }
          .cta-buttons { flex-direction: column; }
        }
      `}</style>

      <nav className="nav-fixed">
        <div className="nav-container">
          <div className="logo">UK Investment Fund League</div>
          <ul className="nav-links">
            <li><a href="#league">League Table</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">First National Student Fund Competition</div>
          <h1>Proving Real Investing Ability Through Performance</h1>
          <p className="hero-subtitle">
            The UK's first national league for student investment funds. Monthly verified rankings that measure real returns, not connections.
          </p>
          <div className="cta-buttons">
            <a href="#league" className="btn btn-primary">View League Table</a>
            <a href="#join" className="btn btn-secondary">Join the League</a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="value-props">
        <div className="section-header">
          <div className="section-subtitle">Why the League Matters</div>
          <h2 className="section-title">Fixing the Broken Recruitment Pipeline</h2>
        </div>
        <div className="props-grid">
          {valueProps.map((prop, index) => (
            <div key={index} className="prop-card">
              <div className="prop-icon">{prop.icon}</div>
              <h3>{prop.title}</h3>
              <p>{prop.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="league-preview" id="league">
        <div className="section-header">
          <div className="section-subtitle">Current Standings</div>
          <h2 className="section-title">Academic Year 2026/27</h2>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Fund Name</th>
                <th>University</th>
                <th>YTD Return</th>
                <th>Sharpe Ratio</th>
                <th>AUM</th>
              </tr>
            </thead>
            <tbody>
              {leagueData.map((fund, index) => (
                <tr key={index}>
                  <td className="rank">{fund.rank}</td>
                  <td className="fund-name">{fund.fundName}</td>
                  <td>{fund.university}</td>
                  <td className="return-positive">{fund.ytdReturn}</td>
                  <td>{fund.sharpeRatio}</td>
                  <td>{fund.aum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="cta-section" id="join">
        <div className="cta-content">
          <h2>Ready to Join the League?</h2>
          <p>Prove your fund's performance on a national stage. Zero cost to participate. Apply for founding member status.</p>
          <a href="#contact" className="btn">Apply Now</a>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 UK University Investment Fund League. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LeagueWebsite;
