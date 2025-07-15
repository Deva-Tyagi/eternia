import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, AlertTriangle, Lock, Info } from 'lucide-react';
import './Disclaimer.css';

const Disclaimer = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="dc-disclaimer-container">
      <div className="dc-header">
        <h1>Disclaimer & Privacy Policy</h1>
        <p>Your privacy and understanding are our top priorities. Please review the following important information about our services.</p>
      </div>

      <div className="dc-sections-grid">
        <div className="dc-section-card">
          <div 
            className="dc-section-header"
            onClick={() => toggleSection('disclaimer')}
          >
            <div className="dc-section-title">
              <AlertTriangle className="dc-section-icon" />
              <span>Disclaimer</span>
            </div>
            <ChevronDown className={`dc-expand-icon ${expandedSection === 'disclaimer' ? 'dc-expanded' : ''}`} />
          </div>
          <div className={`dc-section-content ${expandedSection === 'disclaimer' ? 'dc-expanded' : ''}`}>
            <p className="dc-content-text">
              This website is solely for providing <span className="dc-highlight">informational purposes</span> regarding real estate projects in different regions. By accessing this website, you confirm that the information including brochures and marketing materials is for informational purposes only.
            </p>
            
            <div className="dc-warning-box">
              <AlertTriangle className="dc-warning-icon" size={20} />
              <div>
                <strong>Important:</strong> Nothing on this website constitutes advertising, marketing, booking, selling, or an offer for sale, or invitation to purchase any real estate project. The company is not liable for any consequences of actions taken by viewers relying on such material.
              </div>
            </div>

            <p className="dc-content-text">
              Please note that the company has <span className="dc-highlight">not verified the information and compliances</span> of the projects. We have not checked the RERA (Real Estate Regulation Act 2016) registration status of the listed projects. You should verify RERA registration status before making any property purchase decisions.
            </p>

            <div className="dc-info-box">
              <Info className="dc-info-icon" size={20} />
              <div>
                <strong>Remember:</strong> This site is for information purposes only and should not be treated as the official website.
              </div>
            </div>
          </div>
        </div>

        <div className="dc-section-card">
          <div 
            className="dc-section-header"
            onClick={() => toggleSection('privacy')}
          >
            <div className="dc-section-title">
              <Shield className="dc-section-icon" />
              <span>Privacy Policy</span>
            </div>
            <ChevronDown className={`dc-expand-icon ${expandedSection === 'privacy' ? 'dc-expanded' : ''}`} />
          </div>
          <div className={`dc-section-content ${expandedSection === 'privacy' ? 'dc-expanded' : ''}`}>
            <p className="dc-content-text">
              In our commitment to <span className="dc-highlight">protecting your personal information</span>, we have designed this comprehensive privacy policy to keep your interests and information safe on our website.
            </p>

            <h4 className="dc-content-heading">Policy Updates</h4>
            <p className="dc-content-text">
              This privacy policy may undergo changes and reviews without prior notice. Please keep visiting and reviewing the terms and conditions to stay updated on any modifications.
            </p>

            <h4 className="dc-content-heading">User Information</h4>
            <p className="dc-content-text">
              By using our website, you consent to the collection and use of information you provide. We may collect personal information such as name, email address, and phone number to provide relevant services and acknowledge receipt of communications.
            </p>

            <div className="dc-info-box">
              <Shield className="dc-info-icon" size={20} />
              <div>
                <strong>Your Rights:</strong> You have the option to request removal from our mailing list. We do not share your personal information with third parties.
              </div>
            </div>
          </div>
        </div>

        <div className="dc-section-card">
          <div 
            className="dc-section-header"
            onClick={() => toggleSection('security')}
          >
            <div className="dc-section-title">
              <Lock className="dc-section-icon" />
              <span>Security</span>
            </div>
            <ChevronDown className={`dc-expand-icon ${expandedSection === 'security' ? 'dc-expanded' : ''}`} />
          </div>
          <div className={`dc-section-content ${expandedSection === 'security' ? 'dc-expanded' : ''}`}>
            <p className="dc-content-text">
              To ensure security while transferring sensitive information, all transmissions between client and server are <span className="dc-highlight">encrypted using advanced protocols</span>. We maintain restricted access by employees and hold them to high levels of confidentiality.
            </p>

            <h4 className="dc-content-heading">Cookie Usage</h4>
            <p className="dc-content-text">
              We may use cookies for security, session continuity, and customization purposes. Users who opt to reject cookies may not be able to access some limited services or features of the site.
            </p>

            <div className="dc-warning-box">
              <AlertTriangle className="dc-warning-icon" size={20} />
              <div>
                <strong>Contact Us:</strong> For any queries or suggestions regarding our privacy statement or your dealings with this website, please don't hesitate to contact us.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dc-footer">
        <h3>Questions or Concerns?</h3>
        <p>
          We're here to help! If you have any questions about our policies or how we handle your information, 
          please don't hesitate to reach out to our support team.
        </p>
        <div className="dc-badge">
          <Shield size={16} />
          <span>Your Privacy is Protected</span>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;