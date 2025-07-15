import React, { useState } from 'react';
import { MapPin, Navigation, Building, Trees, Train, Car, School, Hospital } from 'lucide-react';
import './LocationSection.css';

const LocationSection = () => {
  const [activeFeature, setActiveFeature] = useState(null);

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
    window.open('https://maps.app.goo.gl/BgRNvaRJ2tEGdBvC9', '_blank');
  };

  return (
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
                <div className="ls-map-label">Click to Open Map</div>
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
  );
};

export default LocationSection;