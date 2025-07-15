import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import aspire from '../../assets/images/aspire.png'
import nbcc from '../../assets/images/nbcc.png'
import gvr from '../../assets/images/gvr.png'
import yfo from '../../assets/images/yfo.png'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // EmailJS configuration - Replace with your actual values
  const EMAILJS_SERVICE_ID = 'your_service_id';
  const EMAILJS_TEMPLATE_ID = 'your_template_id';
  const EMAILJS_PUBLIC_KEY = 'your_public_key';

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

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'Support Team', // You can customize this
        reply_to: formData.email
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      
      // Show success message
      alert('Thank you for your enquiry! We will get back to you soon.');
      
      // Close popup and reset form
      setIsPopupOpen(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-header">
          <h2 className="powered-by">POWERED BY</h2>
          <div className="decorative-icon">🏛️</div>
        </div>
        
        <div className="companies-section">
          <div className="company-card gvr-card">
            <div className="company-header">
              <div className="company-logo-container">
                <img src={gvr} alt="Great Value Realty Logo" className="company-logo-image" />
                {/* <div className="company-logo-fallback">
                  <div className="logo-icon gvr-logo">
                    <span className="tree-icon">🌳</span>
                  </div>
                  <div className="logo-text">
                    <h3>Great Value</h3>
                    <p>Realty</p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="company-description">
              <p>Founded in 1970, Great Value Realty (GVR) began in glassware and packaging, later expanding into food processing, tech solutions, and real estate. Known for trust and innovation, GVR has led impactful initiatives like Godrej Sarniti and Boyce Records. Its real estate ventures, including Great Value Mall and residential projects like Sharanam and Vilasa, reflect a commitment to quality living. Today, GVR continues to drive progress through strategic partnerships and forward-thinking solutions across industries.</p>
            </div>
          </div>
          
          <div className="company-card yfo-card">
            <div className="company-header">
              <div className="company-logo-container">
                <img src={yfo} alt="Yatharth Family Office Logo" className="company-logo-image" />
                {/* <div className="company-logo-fallback">
                  <div className="logo-icon yfo-logo">
                    <span className="medical-icon">⚕️</span>
                  </div>
                  <div className="logo-text">
                    <h3>YATHARTH</h3>
                    <p>FAMILY OFFICE</p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="company-description">
              <p>Yatharth Family Office is an extension of the Yatharth Group of Hospitals' legacy—built on care, trust, and commitment since 2008. As North India's third-largest public-listed hospital chain with seven hospitals across four states, Yatharth has touched countless lives. Carrying this legacy forward, the Family Office focuses on strategic, long-term investments guided by integrity, foresight, and responsibility, with a vision to build lasting value and drive sustainable growth beyond healthcare.</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright-section">
            <p className="copyright">© COPYRIGHT 2025 NBCC ASPIRE ETERNIA. ALL RIGHT RESERVED.</p>
            <div className="footer-links">
              <Link to="/disclaimer" className="footer-link">
                 DISCLAIMER & PRIVACY POLICY
                </Link>
              <span className="separator">|</span>
              <a href="#" className="footer-link">CRAFTED BY GTF TECHNOLOGIES</a>
            </div>
          </div>
          
          <div className="nbcc-aspire-section">
            <div className="nbcc-aspire-logos">
              <div className="nbcc-logo">
                <div className="logo-container">
                  <img src={nbcc} alt="NBCC Logo" className="logo-image" />
                  <span className="logo-fallback">NBCC</span>
                </div>
              </div>
              <div className="aspire-logo">
                <div className="logo-container">
                  <img src={aspire} alt="Aspire Logo" className="logo-image" />
                  <span className="logo-fallback">ASPIRE</span>
                </div>
              </div>
            </div>
            <div className="disclaimer-text">
              <p>Disclaimer: Authorised marketing partner for Aspire Dream Valley III, managed by NBCC on behalf of the Hon'ble Supreme Court-appointed Court Receiver. | *T&C Apply</p>
            </div>
          </div>
          
          <div className="enquire-section">
            <button className="enquire-btn" onClick={() => setIsPopupOpen(true)}>
              <span>ENQUIRE NOW</span>
              <div className="btn-arrow">→</div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h3>Get In Touch</h3>
              <button className="close-btn" onClick={closePopup}>×</button>
            </div>
            
            <form className="popup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
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
                <label htmlFor="email">Email Address *</label>
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
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              
              <div className="form-buttons">
                <button type="button" className="cancel-btn" onClick={closePopup}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <div className="footer-glow"></div>
    </footer>
  );
};

export default Footer;


