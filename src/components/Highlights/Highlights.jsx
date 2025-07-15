import React, { useState, useEffect } from 'react';
import './Highlights.css';

const Highlights = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const highlights = [
    {
      icon: '🏢',
      title: "3 & 4 BHK Spacious Residences",
      description: "Thoughtfully designed homes with premium finishes"
    },
    {
      icon: '🌳',
      title: "Facing a 100-Mtr Developed Green Belt",
      description: "Surrounded by lush greenery and natural beauty"
    },
    {
      icon: '📍',
      title: "Located on a 130-Mtr Prime Road",
      description: "Excellent connectivity and accessibility"
    },
    {
      icon: '🏗️',
      title: "6 Acres | 6 Towers | G+30 Storey Elevation",
      description: "Expansive development with impressive skyline presence"
    },
    {
      icon: '🏛️',
      title: "Skyline-Defining Symmetrical Tower Layout",
      description: "Architectural excellence with stunning visual appeal"
    },
    {
      icon: '⚡',
      title: "4 Lifts per Tower for Faster Access",
      description: "Seamless vertical transportation for all residents"
    },
    {
      icon: '🏠',
      title: "More Practical Layouts with Better Usable Area",
      description: "Optimized spaces for modern living requirements"
    },
    {
      icon: '🧭',
      title: "Vastu-Compliant Architecture",
      description: "Harmonious design following traditional principles"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hl-smart-living-container">
      <div className="hl-decorative-bg-1"></div>
      <div className="hl-decorative-bg-2"></div>
      
      <div className="hl-content-wrapper">
        {/* Header */}
        <div className="hl-header-section">
          <div className="hl-highlight-badge">HIGHLIGHTS</div>
          <h1 className="hl-main-title">
            VALUES OF SMART LIVING
          </h1>
          <h2 className="hl-sub-title">
            IN OUR RESIDENCE
          </h2>
        </div>

        {/* Main Content */}
        <div className="hl-main-content">
          {/* Image Section */}
          <div className="hl-image-section">
            <div className="hl-image-container">
              <img 
                src="https://eternia.greatvaluerealty.com/assets/images/highlights/highlight_img-new.webp"
                alt="Modern residential towers with green surroundings" 
                className="hl-building-image"
              />
              <div className="hl-image-overlay"></div>
              <div className="hl-artistic-impression">
                <p>Artistic Impression</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="hl-features-section">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className={`hl-feature-card ${activeIndex === index ? 'hl-active' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="hl-feature-icon">
                  {highlight.icon}
                </div>
                
                <div className="hl-feature-content">
                  <h3 className="hl-feature-title">
                    {highlight.title}
                  </h3>
                  <p className="hl-feature-description">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="hl-progress-indicators">
          {highlights.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`hl-progress-dot ${activeIndex === index ? 'hl-active' : ''}`}
            />
          ))}
        </div>

        {/* Decorative Flowers */}
        <div className="hl-decorative-flowers">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="hl-flower"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;