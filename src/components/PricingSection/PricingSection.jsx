import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './PricingSection.css';

const PricingSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pricingPlans = [
    {
      id: 1,
      type: '3 BHK',
      area: '1932 SQ. FT.',
      price: '₹ 1.72 CR*',
      priceNote: 'ONWARDS',
      popular: false
    },
    {
      id: 2,
      type: '3 BHK + STUDY',
      area: '2239 SQ. FT.',
      price: '₹ 1.99 CR*',
      priceNote: 'ONWARDS',
      popular: true
    },
    {
      id: 3,
      type: '4 BHK + STUDY',
      area: '2625 SQ. FT.',
      price: '₹ 2.33 CR*',
      priceNote: 'ONWARDS',
      popular: false
    }
  ];

  const handleInterestClick = (plan) => {
    setSelectedPlan(plan);
    setShowForm(true);
    setFormData({
      name: '',
      email: '',
      mobile: '',
      message: `I'm interested in the ${plan.type} - ${plan.area} unit priced at ${plan.price}.`
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.mobile,
          message: formData.message,
          selected_plan: `${selectedPlan.type} - ${selectedPlan.area}`,
          plan_price: selectedPlan.price
        },
        'YOUR_PUBLIC_KEY'
      );
      
      alert('Thank you for your interest! We will contact you soon.');
      setShowForm(false);
      setFormData({ name: '', email: '', mobile: '', message: '' });
    } catch (error) {
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="section-header">
          <span className="badge">PRICE LIST</span>
          <h2>PREMIUM QUALITY AT A PRICE YOU DESERVE!</h2>
        </div>

        <div className="pricing-cards">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <span className="popular-badge">MOST POPULAR</span>}
              
              <div className="card-content">
                <h3>{plan.type}</h3>
                <p className="area">{plan.area}</p>
                
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  <span className="note">{plan.priceNote}</span>
                </div>
                
                <button 
                  className="interest-btn"
                  onClick={() => handleInterestClick(plan)}
                >
                  INTERESTED
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="offer-note">
          INAUGURAL OFFER ON THE SELECTED FEW UNITS ONLY.
        </p>
      </div>

      {/* Enhanced Form Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowForm(false)}>×</button>
            
            <div className="form-header">
              <h3>Get In Touch</h3>
              <p>We'd love to hear from you. Let's get the conversation started.</p>
            </div>
            
            {selectedPlan && (
              <div className="selected-plan">
                <div className="plan-summary">
                  <strong>Selected Plan:</strong> {selectedPlan.type} - {selectedPlan.area}
                </div>
                <div className="plan-price-tag">
                  <strong>Price:</strong> {selectedPlan.price}
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="input-row">
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="input-group">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Your Mobile *"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    maxLength="10"
                  />
                </div>
              </div>
              
              <div className="input-group">
                <textarea
                  name="message"
                  placeholder="Your Message (Optional)"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>
              
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default PricingSection;