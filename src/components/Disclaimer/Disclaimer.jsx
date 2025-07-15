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
              This website is only for the purpose of providing <span className="dc-highlight">information regarding real estate projects</span> in different regions. By accessing this website, the viewer confirms that the information including brochures and marketing collaterals on this website is solely for informational purposes and the viewer has not relied on this information for making any booking/purchase in any project of the company.
            </p>
            
            <div className="dc-warning-box">
              <AlertTriangle className="dc-warning-icon" size={20} />
              <div>
                <strong>Important:</strong> Nothing on this website constitutes advertising, marketing, booking, selling or an offer for sale, or invitation to purchase a unit in any project by the company. The company is not liable for any consequence of any action taken by the viewer relying on such material/ information on this website.
              </div>
            </div>

            <p className="dc-content-text">
              Please also note that the company has <span className="dc-highlight">not verified the information and the compliances</span> of the projects. Further, the company has not checked the RERA (Real Estate Regulation Act 2016) registration status of the real estate projects listed herein. The company does not make any representation in regards to the compliances done against these projects. You should make yourself aware about the RERA registration status of the listed real estate projects before purchasing property.
            </p>

            <div className="dc-info-box">
              <Info className="dc-info-icon" size={20} />
              <div>
                <strong>Remember:</strong> This site is for information purpose only and should not be treated as the official website.
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
              In our endeavor and commitment of <span className="dc-highlight">protecting your personal information</span>, we have designed this comprehensive privacy policy. This is to keep your interests and information safe on our website.
            </p>

            <h4 className="dc-content-heading">Updation of privacy policy</h4>
            <p className="dc-content-text">
              This privacy policy is subject to undergo change and review without any prior notice or approval. So to keep yourself updated on the changes introduced, please keep visiting and reviewing the terms and conditions of this privacy policy.
            </p>

            <h4 className="dc-content-heading">User information</h4>
            <p className="dc-content-text">
              By using our website, you agree to abide by the rules laid out by us and consent to collection and use of all such information that you may furnish to, or through, our website. In some cases, while you visit our website, you may not need to provide any personal information. But in certain instances, we must have your personal information in order for us to grant you access to some of the links or sites. Such links/ pages may ask for your name, e-mail address, phone number etc. The information furnished by you is used to provide relevant products and services and to acknowledge receipt of your communication or to send out information and updates to you. You have option of requesting removal from our mailing list. We do not give away your personal information to any third party.
            </p>
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
              To ensure security while transferring sensitive information, all the ongoing transmissions between client and server are <span className="dc-highlight">encrypted using advanced and standard protocols</span>. We also practice restricted access by employees and hold them to high levels of confidentiality.
            </p>

            <h4 className="dc-content-heading">Use of cookies</h4>
            <p className="dc-content-text">
              We may use cookies for security, session continuity, and customization purposes. In case of a user opting to reject a cookie, he/ she may not be able to gain access to some of the limited services or use some features of the site.
            </p>

            <div className="dc-warning-box">
              <AlertTriangle className="dc-warning-icon" size={20} />
              <div>
                <strong>Contact Us:</strong> In case of any queries or suggestions regarding privacy statement or your dealings with this web site, please contact.
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