// src/components/FloorPlans.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './FloorPlans.css';

const FloorPlans = () => {
  const [activePlan, setActivePlan] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const plans = [
    { name: 'Master Plan', image: 'https://eternia.greatvaluerealty.com/assets/images/plans/master-plan.webp' },
    { name: '3 BHK UNIT Plan', image: 'https://eternia.greatvaluerealty.com/assets/images/plans/3bhk.webp' },
    { name: '3 BHK + STUDY UNIT Plan', image: 'https://eternia.greatvaluerealty.com/assets/images/plans/3bhk+study.webp' },
    { name: '4 BHK + STUDY UNIT Plan', image: 'https://eternia.greatvaluerealty.com/assets/images/plans/4bhk+study.webp' },
  ];

  const handlePlanChange = (index) => {
    setActivePlan(index);
  };

  const handleImageClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setFormData({ name: '', email: '', mobile: '' });
    setSubmitStatus('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      mobile: formData.mobile,
      floor_plan: plans[activePlan].name,
      message: `Floor Plan Inquiry for ${plans[activePlan].name}`
    };

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        templateParams,
        'YOUR_PUBLIC_KEY' 
      );
      
      setSubmitStatus('success');
      setTimeout(() => {
        handleClosePopup();
      }, 2000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="floor-plans-section">
      <div className="floor-plans-overlay"></div>
      <div className="floor-plans-container">
        <h2 className="floor-plans-title">EXPLORE OUR <span>FLOOR PLANS</span></h2>
        <h1 className="floor-plans-subtitle">ONE ADDRESS THAT DEFINES LUXURY</h1>
        <div className="floor-plans-content">
          <div className="floor-plan-image" onClick={handleImageClick}>
            <img src={plans[activePlan].image} alt={plans[activePlan].name} />
            <div className="plan-details">
              <h3>{plans[activePlan].name}</h3>
              <p>Unveil the epitome of elegant living.</p>
            </div>
            <div className="click-overlay">
              <span className="click-text">Click to Get Details</span>
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

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-header">
              <h3 style={{color:'#d2691e'}}>Get Floor Plan Details</h3>
              <button className="close-button" onClick={handleClosePopup} style={{color:'#d2691e'}}>×</button>
            </div>
            <div className="popup-content">
              <div className="selected-plan-info">
                <h4>Selected Plan: {plans[activePlan].name}</h4>
              </div>
              <form onSubmit={handleSubmit} className="popup-form">
                <div className="form-group">
                  <label htmlFor="name" style={{color:'black'}}>Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" style={{color:'black'}}>Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile" style={{color:'black'}}>Mobile Number *</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your mobile number"
                  />
                </div>
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Get Floor Plan Details'}
                </button>
                {submitStatus === 'success' && (
                  <div className="success-message">
                    Thank you! We'll send you the floor plan details shortly.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="error-message">
                    Sorry, there was an error sending your request. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FloorPlans;