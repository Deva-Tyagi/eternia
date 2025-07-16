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
    phone: ''
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
    setFormData({ name: '', email: '', phone: '' });
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
      phone: formData.phone,
      floor_plan: plans[activePlan].name,
      message: `Floor Plan Inquiry for ${plans[activePlan].name}`
    };

    try {
      await emailjs.send(
        'service_zxqs4vh', 
        'template_ncabbum', 
        templateParams,
        'FPyANi4X-1gUfsMCI' 
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
          <div className="popup-container-redesigned">
            <div className="popup-header-redesigned">
              <div className="popup-icon">📋</div>
              <h3>Get Floor Plan Details</h3>
              <button className="close-button-redesigned" onClick={handleClosePopup}>
                ✕
              </button>
            </div>
            
            <div className="popup-content-redesigned">
              <div className="selected-plan-badge">
                <span className="plan-emoji">🏠</span>
                <span className="plan-name">{plans[activePlan].name}</span>
              </div>
              
              <form onSubmit={handleSubmit} className="popup-form-redesigned">
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="👤 Full Name"
                    className="form-input-redesigned"
                  />
                </div>
                
                <div className="form-row">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="📧 Email Address"
                    className="form-input-redesigned"
                  />
                </div>
                
                <div className="form-row">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="📱 Mobile Number"
                    className="form-input-redesigned"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="submit-button-redesigned"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>📩</span>
                      Get Details
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="message-redesigned success-redesigned">
                    ✅ Thank you! We'll send details shortly.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="message-redesigned error-redesigned">
                    ❌ Error occurred. Please try again.
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