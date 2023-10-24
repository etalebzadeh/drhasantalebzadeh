import React, { useState, useEffect } from 'react';
import './Slider.css';
import Modal from './Modal';


const Slider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false); 
  const [isPaused, setIsPaused] = useState(false);


  useEffect(() => {
    if (isPaused) return; 
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(timer);
  }, [images, isPaused]);

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === activeIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image.url})` }}
          onClick={() => {
            setShowModal(true); // Open the modal when the slide is clicked
            setIsPaused(true);  // Pause the sliding
          }}
        ></div>
      ))}
      <button className="slide-btn prev" onClick={prevSlide}>❮</button>
      <button className="slide-btn next" onClick={nextSlide}>❯</button>

      {showModal && (
        <Modal 
          image={images[activeIndex].url}
          caption={images[activeIndex].caption}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Slider;
