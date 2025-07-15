import React, { useState, useEffect } from 'react';
import { Phone, Download, X, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import logo from '../../assets/images/eternia_dark.png'
import './HeroSection.css';

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [showAutoPopup, setShowAutoPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Auto-popup effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAutoPopup(true);
    }, 6000); 

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'your_service_id', 
        'your_template_id',
        {
          from_name: formData.name,
          from_email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
        },
        'your_public_key'
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', mobile: '', message: '' });
      setTimeout(() => {
        setShowForm(false);
        setShowAutoPopup(false);
        setSubmitStatus('');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowForm(false);
    setShowAutoPopup(false);
  };

  const phoneNumber = "+919278883232";

  return (
    <div className="eternia-hero">
      <div className="eternia-hero-bg">
        <div className="eternia-parallax-image">
          <div className="eternia-overlay"></div>
          <div className="eternia-gold-accent"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="eternia-content-container">
        {/* Header */}
        <div className="eternia-header">
          <div className="eternia-logo">
            <img src={logo} alt="" />
          </div>
          
          <div className="eternia-header-actions">
            <div className="eternia-location">
              <MapPin className="eternia-location-icon" />
              <span>TECH ZONE IV, GREATER NOIDA (W)</span>
            </div>
            <button 
              className="eternia-brochure-btn"
              onClick={() => setShowForm(true)}
            >
              <Download size={16} />
              <span>GET INFO</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="eternia-main-content">
          <div className="eternia-content-left">
            <h1 className="eternia-title">
              <span className="eternia-title-line">SPACIOUS 3 & 4 BHK</span>
              <span className="eternia-title-line">RESIDENCES FOR GRAND LIVING</span>
            </h1>
            
            <div className="eternia-price-section">
              <div className="eternia-price-box">
                <span className="eternia-price-label">PRICE START FROM</span>
                <span className="eternia-price-amount">₹1.72 CR*</span>
              </div>
              <p className="eternia-offer-text">OFFER VALID ON LIMITED UNITS ONLY</p>
            </div>

            <div className="eternia-savings-banner">
              <div className="eternia-savings-text">
                SAVE UPTO ₹40.52 LAKHS*
                <span className="eternia-savings-subtext">INAUGURAL WAIVER</span>
              </div>
            </div>

            <div className="eternia-features">
              <div className="eternia-feature-item">
                <div className="eternia-feature-title">
                  <span style={{ color: '#4CAF50', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '8px' }}>FREE</span>
                  1 Car
                </div>
                <div className="eternia-feature-subtitle">Parking</div>
              </div>
              <div className="eternia-feature-item">
                <div className="eternia-feature-title">
                  <span style={{ color: '#4CAF50', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '8px' }}>FREE</span>
                  Club
                </div>
                <div className="eternia-feature-subtitle">Membership</div>
              </div>
              <div className="eternia-feature-item">
                <div className="eternia-feature-title">
                  <span style={{ color: '#4CAF50', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '8px' }}>FREE</span>
                  Power
                </div>
                <div className="eternia-feature-subtitle">Backup</div>
              </div>
              <div className="eternia-feature-item">
                <div className="eternia-feature-title">
                  <span style={{ color: '#4CAF50', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '8px' }}>FREE</span>
                  Electricity
                </div>
                <div className="eternia-feature-subtitle">Infrastructure Charges</div>
              </div>
              <div className="eternia-feature-item">
                <div className="eternia-feature-title">
                  <span style={{ color: '#4CAF50', fontWeight: 'bold', fontSize: '1.1rem', marginRight: '8px' }}>FREE</span>
                  2 Year
                </div>
                <div className="eternia-feature-subtitle">Maintenance</div>
              </div>
            </div>

            <button 
              className="eternia-enquire-btn"
              onClick={() => setShowForm(true)}
            >
              ENQUIRE NOW
            </button>
          </div>
        </div>

        {/* Call Button */}
        <a 
          href={`tel:${phoneNumber}`} 
          className="eternia-call-button"
        >
          <Phone size={20} />
        </a>
      </div>

      {showForm && (
        <div className="eternia-modal-overlay">
          <div className="eternia-modal">
            <div className="eternia-modal-header">
              <h3>ENQUIRE NOW</h3>
              <button 
                className="eternia-close-btn"
                onClick={closePopup}
              >
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="eternia-form">
              <div className="eternia-form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="eternia-form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="eternia-form-group">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              {/* <div className="eternia-form-group">
                <textarea
                  name="message"
                  placeholder="Your Message (Optional)"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                ></textarea>
              </div> */}
              
              <button 
                type="submit"
                className="eternia-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="eternia-success-message">Thank you! We'll contact you shortly.</p>
              )}
              {submitStatus === 'error' && (
                <p className="eternia-error-message">Please try again. An error occurred.</p>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Auto-Popup Form Modal */}
      {showAutoPopup && (
        <div className="eternia-modal-overlay eternia-auto-popup">
          <div className="eternia-modal eternia-auto-popup-modal">
            <div className="eternia-modal-header">
              <h3>🏡 Why Wait to Upgrade? Discover Luxury You Deserve.</h3>
              <button 
                className="eternia-close-btn"
                onClick={closePopup}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="eternia-auto-popup-content">
              <p className="eternia-popup-message">
               Get Exclusive Pricing Details And Floor Plans For Eternia's Luxury Residences. Limited Time Offer - Save Up To ₹40.52 Lakhs!
              </p>
              
              <form onSubmit={handleSubmit} className="eternia-form">
                <div className="eternia-form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="eternia-form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="eternia-form-group">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                {/* <div className="eternia-form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message (Optional)"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                  ></textarea>
                </div> */}
                
                <button 
                  type="submit"
                  className="eternia-submit-btn eternia-popup-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'GET EXCLUSIVE DETAILS'}
                </button>
                
                {submitStatus === 'success' && (
                  <p className="eternia-success-message">Thank you! We'll contact you shortly.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="eternia-error-message">Please try again. An error occurred.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;