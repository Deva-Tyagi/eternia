import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Building, Trees, Train, Car, School, Hospital, X } from 'lucide-react';
import emailjs from '@emailjs/browser'; // Import EmailJS properly
import './LocationSection.css';

const LocationSection = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Initialize EmailJS when component mounts
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('FPyANi4X-1gUfsMCI');
  }, []);

  const features = [
    {
      id: 1,
      icon: <Navigation className="ls-feature-icon" />,
      title: "130 Mtr Wide Main Road Frontage",
      description: "Direct access to major road"
    },
    {
      id: 2,
      icon: <Trees className="ls-feature-icon" />,
      title: "100 Mtr Green Belt View",
      description: "Peaceful green environment"
    },
    {
      id: 3,
      icon: <Building className="ls-feature-icon" />,
      title: "Non-Congested Central Location",
      description: "Perfect connectivity balance"
    },
    {
      id: 4,
      icon: <School className="ls-feature-icon" />,
      title: "Close to Essential Amenities",
      description: "Schools, Metro, Malls, Hospitals"
    },
    {
      id: 5,
      icon: <Car className="ls-feature-icon" />,
      title: "Major Expressway Access",
      description: "Easy NCR connectivity"
    },
    {
      id: 6,
      icon: <Train className="ls-feature-icon" />,
      title: "Proposed Metro Station",
      description: "Future metro connectivity"
    }
  ];

  const handleMapClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setSubmitStatus('error');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const templateParams = {
        to_name: 'Admin',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: 'User requested location details'
      };

      const response = await emailjs.send(
        'service_zxqs4vh', // Your EmailJS service ID
        'template_ncabbum', // Your EmailJS template ID
        templateParams,
        'FPyANi4X-1gUfsMCI' // Your EmailJS public key
      );

      console.log('EmailJS Response:', response);

      if (response.status === 200) {
        setSubmitStatus('success');
        setTimeout(() => {
          handleFormClose();
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="ls-location-section">
        <div className="ls-location-container">
          
          {/* Header */}
          <div className="ls-location-header">
            <span className="ls-location-badge">LOCATION MAP</span>
            <h1 className="ls-location-title">IN THE HEART OF THE CITY</h1>
            <h2 className="ls-location-subtitle">AWAY FROM THE CHAOS</h2>
            <p className="ls-location-description">
              Located in the most connected, developed, and livable sector of Greater Noida West—yet free from crowding.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="ls-location-content">
            
            {/* Left Side - Map */}
            <div className="ls-map-section">
              <div className="ls-map-container" onClick={handleMapClick}>
                <div className="ls-map-visual">
                  <div className="ls-map-pin">
                    <MapPin size={24} />
                  </div>
                  <div className="ls-map-grid">
                    {Array.from({ length: 12 }, (_, i) => (
                      <div key={i} className="ls-grid-cell"></div>
                    ))}
                  </div>
                  <div className="ls-location-marker"></div>
                  <div className="ls-map-label">Click to Get The Location</div>
                </div>
              </div>
            </div>

            {/* Right Side - Features */}
            <div className="ls-features-section">
              <div className="ls-features-grid">
                {features.map((feature, index) => (
                  <div 
                    key={feature.id}
                    className={`ls-feature-item ${activeFeature === feature.id ? 'ls-active' : ''}`}
                    onMouseEnter={() => setActiveFeature(feature.id)}
                    onMouseLeave={() => setActiveFeature(null)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="ls-feature-icon-wrapper">
                      {feature.icon}
                    </div>
                    <div className="ls-feature-text">
                      <h3 className="ls-feature-title">{feature.title}</h3>
                      <p className="ls-feature-desc">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Background Pattern */}
          <div className="ls-bg-pattern">
            <div className="ls-pattern-dot"></div>
            <div className="ls-pattern-dot"></div>
            <div className="ls-pattern-dot"></div>
            <div className="ls-pattern-dot"></div>
          </div>

        </div>
      </div>

      {/* Form Popup */}
      {showForm && (
        <div className="ls-form-overlay" onClick={(e) => e.target === e.currentTarget && handleFormClose()}>
          <div className="ls-form-popup">
            <button className="ls-form-close" onClick={handleFormClose}>
              <X size={24} />
            </button>
            
            <div className="ls-form-header">
              <h2 className="ls-form-title">Get Location Details</h2>
              <p className="ls-form-subtitle">Fill out the form below and we'll send you more information</p>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="ls-form-group">
                <label className="ls-form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  className="ls-form-input"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="ls-form-group">
                <label className="ls-form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  className="ls-form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="ls-form-group">
                <label className="ls-form-label">Mobile Number *</label>
                <input
                  type="tel"
                  name="phone"
                  className="ls-form-input"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your mobile number"
                />
              </div>

              <button 
                type="submit"
                className="ls-form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Information'}
              </button>
            </form>

            {submitStatus && (
              <div className={`ls-form-status ${submitStatus}`}>
                {submitStatus === 'success' 
                  ? 'Thank you! We will send you the location details shortly.' 
                  : 'Something went wrong. Please try again or check your input.'}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LocationSection;