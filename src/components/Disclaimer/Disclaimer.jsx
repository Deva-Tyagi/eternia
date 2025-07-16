import React, { useState } from 'react';
import { ChevronDown, AlertTriangle, Lock, Shield } from 'lucide-react';
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

        {/* Disclaimer Section */}
        <div className="dc-section-card">
          <div className="dc-section-header" onClick={() => toggleSection('disclaimer')}>
            <div className="dc-section-title">
              <AlertTriangle className="dc-section-icon" />
              <span>Disclaimer</span>
            </div>
            <ChevronDown className={`dc-expand-icon ${expandedSection === 'disclaimer' ? 'dc-expanded' : ''}`} />
          </div>
          <div className={`dc-section-content ${expandedSection === 'disclaimer' ? 'dc-expanded' : ''}`}>
            <p className="dc-content-text">
              At INSTADEAL, we respect your privacy and the confidentiality of the information you submit on our portal. We are committed to protecting the privacy of users’ personal information collected on our platform. We do not sell, trade, or rent your personal information to others. Information collected on our website is kept strictly confidential. We use the collected information to enhance your satisfaction by designing services tailored to your needs.
            </p>
            <p className="dc-content-text">
              By using our website, you consent to the collection and use of this information. This policy applies solely to information collected by INSTADEAL and is part of our Terms and Conditions of Use. Personal Information stored in a user’s profile may be used, for example, to send invitation emails to people interested in joining the community.
            </p>
            <p className="dc-content-text">
              We collect information from you when you register on our site or fill out a form. You may be asked to enter your name, email, mailing address, or phone number. We may also collect your computer’s IP address, IP address location, and browser/device information. However, you may visit our site anonymously.
            </p>
            <p className="dc-content-text">
              Although INSTADEAL allows privacy settings, no security measures are perfect or impenetrable. INSTADEAL only shares user information with others when we have the user’s permission or as required by law or for legal proceedings, fraud prevention, or security concerns.
            </p>
          </div>
        </div>

        {/* Privacy Policy Section */}
        <div className="dc-section-card">
          <div className="dc-section-header" onClick={() => toggleSection('privacy')}>
            <div className="dc-section-title">
              <Shield className="dc-section-icon" />
              <span>Privacy Policy</span>
            </div>
            <ChevronDown className={`dc-expand-icon ${expandedSection === 'privacy' ? 'dc-expanded' : ''}`} />
          </div>
          <div className={`dc-section-content ${expandedSection === 'privacy' ? 'dc-expanded' : ''}`}>
            <p className="dc-content-text">
              This privacy policy explains how INSTADEAL collects, uses, and protects your information. By using our website and submitting your information, you agree to this policy.
            </p>
            <p className="dc-content-text">
              We may collect your name, email address, mailing address, phone number, IP address, browser/device information, and any content submitted through forms. We do not sell or rent this data. Your information is used only to provide services, respond to inquiries, and improve the platform.
            </p>
            <p className="dc-content-text">
              We may track your usage such as domain, pages visited, referring sites, and time spent. This helps improve performance and customize services. Trusted third-party tools (e.g., analytics or marketing) may assist us if they maintain strict confidentiality.
            </p>
            <p className="dc-content-text">
              Cookies: a) Cookies are stored on your browser/device and may be used for session management, performance monitoring, and personalization. b) You can decline cookies, but this may limit site functionality.
            </p>
            <p className="dc-content-text">
              Third-party links or ads may appear on our website. We are not responsible for their content or privacy practices.
            </p>
            <p className="dc-content-text">
              User consent is required for all data usage. By continuing to use the website, you consent to our terms. You can opt out of communication or request data deletion.
            </p>
            <p className="dc-content-text">
              Governing Law: These terms are governed by Indian law, and any disputes shall be subject to the jurisdiction of courts in Noida, Uttar Pradesh. For concerns, email us at <a href="mailto:legal@instadeal.in">legal@instadeal.in</a>.
            </p>
          </div>
        </div>

        {/* Security Section */}
        <div className="dc-section-card">
          <div className="dc-section-header" onClick={() => toggleSection('security')}>
            <div className="dc-section-title">
              <Lock className="dc-section-icon" />
              <span>Security</span>
            </div>
            <ChevronDown className={`dc-expand-icon ${expandedSection === 'security' ? 'dc-expanded' : ''}`} />
          </div>
          <div className={`dc-section-content ${expandedSection === 'security' ? 'dc-expanded' : ''}`}>
            <p className="dc-content-text">
              INSTADEAL implements secure transmission protocols to protect sensitive information. All communication is encrypted using industry standards.
            </p>
            <p className="dc-content-text">
              Access to personal information is limited to employees or service providers who need it for delivering services and are bound by confidentiality agreements.
            </p>
            <p className="dc-content-text">
              We use cookies for session continuity, analytics, and personalization. You can decline cookies but may experience limited functionality.
            </p>
            <p className="dc-content-text">
              In case of any legal requirements, fraud investigation, or safety enforcement, user data may be accessed or shared as needed with law enforcement.
            </p>
          </div>
        </div>

      </div>

      <div className="dc-footer">
        <h3>Questions or Concerns?</h3>
        <p>If you have questions about how we handle your data or this policy, contact us at <a href="mailto:legal@instadeal.in">legal@instadeal.in</a>.</p>
        <div className="dc-badge">
          <Shield size={16} />
          <span>Your Privacy is Protected</span>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
