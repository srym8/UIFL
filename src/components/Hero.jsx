import React from 'react';

const Hero = () => {
  return (
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
  );
}

export default Hero;