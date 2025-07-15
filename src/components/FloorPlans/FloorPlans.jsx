// src/components/FloorPlans.js
import React, { useState } from 'react';
import './FloorPlans.css';

const FloorPlans = () => {
  const [activePlan, setActivePlan] = useState(0);
  const plans = [
    { name: 'Master Plan', image: 'https://eternia.greatvaluerealty.com/assets/images/plans/master-plan.webp' },
    { name: '3 BHK UNIT Plan', image: 'https://eternia.greatvaluerealty.com/assets/images/plans/3bhk.webp' },
    { name: '3 BHK + STUDY UNIT Plan', image: 'https://eternia.greatvaluerealty.com/assets/images/plans/3bhk+study.webp' },
    { name: '4 BHK + STUDY UNIT Plan', image: 'https://eternia.greatvaluerealty.com/assets/images/plans/4bhk+study.webp' },
  ];

  const handlePlanChange = (index) => {
    setActivePlan(index);
  };

  return (
    <section className="floor-plans-section">
      <div className="floor-plans-overlay"></div>
      <div className="floor-plans-container">
        <h2 className="floor-plans-title">EXPLORE OUR <span>FLOOR PLANS</span></h2>
        <h1 className="floor-plans-subtitle">ONE ADDRESS THAT DEFINES LUXURY</h1>
        <div className="floor-plans-content">
          <div className="floor-plan-image">
            <img src={plans[activePlan].image} alt={plans[activePlan].name} />
            <div className="plan-details">
              <h3>{plans[activePlan].name}</h3>
              <p>Unveil the epitome of elegant living.</p>
            </div>
          </div>
          <div className="plan-navigation">
            {plans.map((plan, index) => (
              <button
                key={index}
                className={`nav-button ${activePlan === index ? 'active' : ''}`}
                onClick={() => handlePlanChange(index)}
              >
                <span className="button-icon">🏠</span> {plan.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;