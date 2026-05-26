import React from 'react';
import valueProps from '../data/valueProps';

const ValueProps = () => {
  return (
    <section className="value-props">
      <div className="section-header">
        <div className="section-subtitle">Why the League Matters</div>
        <h2 className="section-title">Fixing the Broken Recruitment Pipeline</h2>
      </div>
      <div className="props-grid">
        {valueProps.map((prop) => (
          <div key={prop.title} className="prop-card">
            <div className="prop-icon">{prop.icon}</div>
            <h3>{prop.title}</h3>
            <p>{prop.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ValueProps;