import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS service ID, template ID, and user ID
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cf-contact-container">
      <div className="cf-contact-content">
        <header className="cf-contact-header">
          <h1 className="cf-contact-title">CONTACT US</h1>
          <h2 className="cf-contact-subtitle">
            READY TO BLOOM INTO A<br />
            BETTER LIFE?
          </h2>
        </header>

        <div className="cf-contact-form">
          <div className="cf-form-row">
            <div className="cf-form-group">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                value={formData.name}
                onChange={handleChange}
                required
                className="cf-form-input"
              />
            </div>
            <div className="cf-form-group">
              <input
                type="email"
                name="email"
                placeholder="MAIL ID"
                value={formData.email}
                onChange={handleChange}
                required
                className="cf-form-input"
              />
            </div>
            <div className="cf-form-group">
              <input
                type="tel"
                name="phone"
                placeholder="PHONE NUMBER"
                value={formData.phone}
                onChange={handleChange}
                required
                className="cf-form-input"
              />
            </div>
          </div>

          <div className="cf-form-group cf-message-group">
            <textarea
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleChange}
              required
              className="cf-form-textarea"
              rows="5"
            />
          </div>

          <div className="cf-submit-container">
            <button
              onClick={handleSubmit}
              className="cf-submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'SENDING...' : 'SUBMIT NOW'}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="cf-status-message cf-success">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="cf-status-message cf-error">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}
        </div>

        <footer className="cf-contact-footer">
          <div className="cf-footer-item">
            <span className="cf-footer-icon">📞</span>
            <span className="cf-footer-text">Call: +91-9911-356-262</span>
          </div>
          <div className="cf-footer-item">
            <span className="cf-footer-icon">📍</span>
            <span className="cf-footer-text">Tech Zone IV, Greater Noida (W)</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactForm;