import React, { useState } from 'react';
import './AmentitiesSection.css'

const AmenitiesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
  image: "https://m.media-amazon.com/images/I/71fbEhRjLtL._UF350,350_QL80_.jpg",
  title: "Basketball Court",
  description: "Spacious outdoor court designed for fun and friendly matches"
},
{
  image: "https://luxuryresidences.co.in/wp-content/uploads/2025/06/aspire-dream-valley-eternia-gallery-img-new-8-zoom.webp", 
  title: "Chip and Putting Greens",
  description: "Lush golfing area perfect for short game and practice shots"
},
{
  image: "https://m.media-amazon.com/images/I/5122gEWQHHL._AC_UF894,1000_QL80_.jpg",
  title: "Deck Seating",
  description: "Relaxing open-air space with stylish furniture and ambiance"
},
{
  image: "https://img.freepik.com/free-photo/new-clean-luxury-restaurant-european-style-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18743.jpg",
  title: "Banquet Hall",
  description: "Elegant venue for events, celebrations, and social gatherings"
},
{
  image: "https://sodasirukis.lt/wp-content/uploads/2024/04/Smaragd-tujos.webp",
  title: "Topiary Garden",
  description: "Artistically trimmed greenery offering beauty and relaxation"
},
{
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAqR1Ic6rbMxOE8Qs-MpA46BDeMpwn5bsb7k230ATedACz9kl",
  title: "Lawn",
  description: "Sprawling open green space ideal for leisure and picnics"
},
{
  image: "https://newprojects.99acres.com/projects/nbcc_india/nbcc_aspire_eternia_residences/images/vwvwi9y_1749294676_604736309_optOrig.jpg",
  title: "Multipurpose Court",
  description: "Versatile court area suited for tennis, badminton, or more"
},
{
  image: "https://newprojects.99acres.com/projects/nbcc_india/nbcc_aspire_eternia_residences/images/ll9ercd_1749294676_604736311_O.jpg",
  title: "Toddlers' Play Area",
  description: "Safe and colorful zone with toys for the youngest residents"
},
{
  image: "https://newprojects.99acres.com/projects/nbcc_india/nbcc_aspire_eternia_residences/images/fwm9jo3_1749294677_604736315_optOrig.jpg",
  title: "Swimming Pool",
  description: "Sparkling clean pool with lounge and water features around"
},
{
  image: "https://northbrick.in/wp-content/uploads/2025/06/gym-1-1024x688.webp",
  title: "Jogging Track & Gymnasium",
  description: "Fitness-focused path and gym for a healthy daily routine"
},
{
  image: "https://eternia-residences.co.in/images/gallery-4-th.png",
  title: "Billiard Room",
  description: "Chic indoor room perfect for relaxing and playing billiards"
},
{
  image: "https://northbrick.in/wp-content/uploads/2025/06/kids-play-area-1.webp",
  title: "Kids' Play Area",
  description: "Playful space with swings, slides, and child-safe equipment"
},
{
  image: "https://newprojects.99acres.com/projects/anvita_buildpro_llp/anvita_ivana/images/kskqudv_1716354383_493433416_optOrig.jpg",
  title: "Senior Citizen Garden",
  description: "Peaceful garden with benches and walking paths for elders"
}

  ];

  const amenities = [
    { name: "Water Feature", icon: "💧" },
    { name: "Multipurpose Court", icon: "🏟️" },
    { name: "Toddlers' Play Area", icon: "🎪" },
    { name: "Swimming Pool", icon: "🏊" },
    { name: "Billiard Room", icon: "🎱" },
    { name: "Basketball Court", icon: "🏀" },
    { name: "Yoga, Aerobics", icon: "🧘" },
    { name: "Senior Citizen Garden", icon: "🌳" },
    { name: "Deck Seating", icon: "🪑" },
    { name: "Banquet Hall", icon: "🏛️" },
    { name: "Jogging Track & Gymnasium", icon: "🏃" },
    { name: "Chip and Putting Greens", icon: "⛳" },
    { name: "Topiary Garden", icon: "🌿" },
    { name: "Lawn", icon: "🌱" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="em-amenities-section">
      <div className="em-amenities-container">
        {/* Header */}
        <div className="em-amenities-header">
          <h3 className="em-amenities-subtitle">
            A M E N I T I E S
          </h3>
          <h1 className="em-amenities-title">
            THOUGHTFUL SPACES FOR A<br />
            <span className="em-amenities-title-highlight">BALANCED LIFE</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="em-amenities-content">
          {/* Image Carousel */}
          <div className="em-carousel-container">
            <div className="em-carousel-wrapper">
              <div 
                className="em-carousel-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="em-carousel-slide">
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="em-carousel-image"
                    />
                    <div className="em-carousel-overlay" />
                    <div className="em-carousel-content">
                      <h3 className="em-carousel-slide-title">{slide.title}</h3>
                      <p className="em-carousel-slide-description">{slide.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevSlide}
                className="em-carousel-nav em-carousel-nav-prev"
              >
                <span className="em-carousel-nav-icon">‹</span>
              </button>
              <button 
                onClick={nextSlide}
                className="em-carousel-nav em-carousel-nav-next"
              >
                <span className="em-carousel-nav-icon">›</span>
              </button>
            </div>
            
            {/* Slide Indicators */}
            <div className="em-carousel-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`em-carousel-indicator ${
                    index === currentSlide ? 'em-carousel-indicator-active' : 'em-carousel-indicator-inactive'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="em-amenities-grid">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="em-amenity-card"
              >
                <div className="em-amenity-content">
                  <div className="em-amenity-icon-wrapper">
                    <span className="em-amenity-icon">{amenity.icon}</span>
                  </div>
                  <span className="em-amenity-name">
                    {amenity.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="em-floating-element-1" />
        <div className="em-floating-element-2" />
      </div>
    </div>
  );
};

export default AmenitiesSection;