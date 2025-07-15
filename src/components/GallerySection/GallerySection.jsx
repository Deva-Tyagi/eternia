import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';
import './GallerySection.css';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: 'https://eternia.greatvaluerealty.com/assets/images/gallery/new-images/kids-play-area.webp', alt: 'Kids Play Area' },
    { src: 'https://eternia.greatvaluerealty.com/assets/images/gallery/new-images/kids-play-room-1.webp', alt: 'Kids Play Room' },
    { src: 'https://eternia.greatvaluerealty.com/assets/images/gallery/new-images/multipurpose_court_2-1.webp', alt: 'Multipurpose Court' },
    { src: 'https://eternia.greatvaluerealty.com/assets/images/gallery/new-images/sitting-plaza-1.webp', alt: 'Sitting Plaza' },
    { src: 'https://eternia.greatvaluerealty.com/assets/images/gallery/new-images/swimming_pool-1.webp', alt: 'Swimming Pool' },
    { src: 'https://eternia.greatvaluerealty.com/assets/images/gallery/new-images/water_feature-2.webp', alt: 'Water Feature' },
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <div className="header-content">
          <span className="subtitle">GALLERY</span>
          <h2 className="main-title">EXPLORE OUR LUXURY AMENITIES</h2>
          <p className="description">
            Discover the exceptional lifestyle and world-class facilities that make our property truly special
          </p>
        </div>
      </div>

      <div className="gallery-grid">
        <div className="main-image">
          <div className="image-wrapper" onClick={() => openModal(images[0], 0)}>
            <img src={images[0].src} alt={images[0].alt} />
            <div className="image-overlay">
              <Eye className="view-icon" />
              <span className="view-text">View Gallery</span>
            </div>
          </div>
        </div>

        <div className="secondary-images">
          {images.slice(1, 5).map((image, index) => (
            <div key={index + 1} className="image-wrapper" onClick={() => openModal(image, index + 1)}>
              <img src={image.src} alt={image.alt} />
              <div className="image-overlay">
                <Eye className="view-icon" />
              </div>
            </div>
          ))}
        </div>

        <div className="more-images">
          <div className="image-wrapper" onClick={() => openModal(images[5], 5)}>
            <img src={images[5].src} alt={images[5].alt} />
            <div className="image-overlay more-overlay">
              <span className="more-text">+{images.length - 5} MORE</span>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              <X />
            </button>
            <button className="nav-btn prev-btn" onClick={prevImage}>
              <ChevronLeft />
            </button>
            <button className="nav-btn next-btn" onClick={nextImage}>
              <ChevronRight />
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
            <div className="modal-caption">
              
              <span className="image-counter">{currentIndex + 1} / {images.length}</span>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        
      `}</style>
    </div>
  );
};

export default GallerySection;