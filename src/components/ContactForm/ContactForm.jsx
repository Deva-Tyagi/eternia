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
    <div className="contact-container">
      <div className="contact-content">
        <header className="contact-header">
          <h1 className="contact-title">CONTACT US</h1>
          <h2 className="contact-subtitle">
            READY TO BLOOM INTO A<br />
            BETTER LIFE?
          </h2>
        </header>

        <div className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="MAIL ID"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="PHONE NUMBER"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group message-group">
            <textarea
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
              rows="5"
            />
          </div>

          <div className="submit-container">
            <button
              onClick={handleSubmit}
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'SENDING...' : 'SUBMIT NOW'}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="status-message success">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="status-message error">
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}
        </div>

        <footer className="contact-footer">
          <div className="footer-item">
            <span className="footer-icon">📞</span>
            <span className="footer-text">Call: +91-9278-883-232</span>
          </div>
          <div className="footer-item">
            <span className="footer-icon">📍</span>
            <span className="footer-text">Tech Zone IV, Greater Noida (W)</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactForm;