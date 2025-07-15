import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    acres: 0,
    towers: 0,
    lifts: 0,
    amenities: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector('.about-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const targets = { acres: 6, towers: 6, lifts: 4, amenities: 25 };
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setAnimatedNumbers({
        acres: Math.floor(targets.acres * progress),
        towers: Math.floor(targets.towers * progress),
        lifts: Math.floor(targets.lifts * progress),
        amenities: Math.floor(targets.amenities * progress)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  return (
    <div className="about-section">
      {/* Background Elements */}
      <div className="about-bg">
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
      </div>

      {/* Decorative Elements */}
      <div className="floating-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
      </div>

      {/* Anthurium Flower Decoration */}
      <div className="anthurium-decoration">
        <div className="anthurium-flower">
          <div className="flower-petal"></div>
          <div className="flower-stem"></div>
          <div className="flower-spadix"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="about-content">
        {/* Header */}
        <div className={`about-header ${isVisible ? 'animate-in' : ''}`}>
          <div className="section-label">
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
            <span className="spacing"></span>
            <span>U</span>
            <span>S</span>
          </div>
          
          <h2 className="main-heading">
            <span className="heading-line">ROOTED IN GRACE.</span>
            <span className="heading-line">DEFINED BY DESIGN.</span>
          </h2>
        </div>

        {/* Description */}
        <div className={`about-description ${isVisible ? 'animate-in' : ''}`}>
          <p>
            Eternia draws its inspiration from the Anthurium flower—a symbol of timeless life, quiet strength, and graceful permanence. Located 
            on a wide 130-meter road in the most prime, fully habitable sector of Greater Noida West, this non-congested oasis faces a 100-
            meter wide developed green belt. Spread across 6 beautifully laid-out acres with 6 G+30 skyline-defining towers, Eternia is a 
            celebration of space, symmetry, and sensibility. With 4 lifts per tower and intelligently planned layouts, the project offers lesser 
            saleable area and more usable space—delivering unmatched value. Here, beauty meets function and space meets soul.
          </p>
        </div>

        {/* Statistics */}
        <div className={`stats-container ${isVisible ? 'animate-in' : ''}`}>
          <div className="stat-item">
            <div className="stat-number">
              <span className="number">{animatedNumbers.acres}</span>
            </div>
            <div className="stat-label">ACRES</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">
              <span className="number">{animatedNumbers.towers}</span>
            </div>
            <div className="stat-label">TOWER</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">
              <span className="number">{animatedNumbers.lifts}</span>
            </div>
            <div className="stat-label">LIFTS IN EACH TOWER</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">
              <span className="number">{animatedNumbers.amenities}</span>
              <span className="plus">+</span>
            </div>
            <div className="stat-label">AMENITIES</div>
          </div>
        </div>
      </div>

      {/* Particle Effects */}
      <div className="particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>
    </div>
  );
};

export default AboutSection;