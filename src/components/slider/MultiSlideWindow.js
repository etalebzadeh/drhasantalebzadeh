import React, { useState, useEffect, useRef } from 'react';
import './MultiSlideWindow.css';

const MultiSlideWindow = ({ slides }) => {
  const [current, setCurrent] = useState(1); // Start at 1 because index 0 will be a clone of the last slide
  const slideHolderRef = useRef(null);

  // Clone the first and last slides
  const slidesClone = [slides[slides.length - 1], ...slides, slides[0]];

  // Function to calculate the next set of slides
  const nextSlide = () => {
    setCurrent((prevCurrent) => {
      if (prevCurrent >= slidesClone.length - 1) {
        return 1; // Skip back to the first slide (bypassing the clone)
      }
      return prevCurrent + 1;
    });
  };

  useEffect(() => {
    if (current === slidesClone.length - 1) {
      // We are on the cloned first slide, loop back to the "real" first slide
      const timerId = setTimeout(() => {
        // Use a timeout to ensure the transition is smooth
        slideHolderRef.current.style.transition = 'none'; // Temporarily disable the transition
        slideHolderRef.current.style.transform = `translateX(-${100 / slidesClone.length}%)`; // Move to the "real" first slide
        setCurrent(1); // Set current to the "real" first slide
      }, 500); // This delay should be equal to your CSS transition duration

      return () => clearTimeout(timerId);
    }

    slideHolderRef.current.style.transition = 'transform 0.5s ease-in-out'; // Re-enable the transition
    slideHolderRef.current.style.transform = `translateX(-${current * (100 / slidesClone.length)}%)`; // Move to the next slide
  }, [current, slidesClone.length]);

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 3000); // Change slides every 3 seconds
    return () => clearInterval(autoSlide); // Clear interval if the component is unmounted or the effect runs again
  }, []);

  // Conditional rendering for non-existent slides
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider_two">
      <div className="slide-holder" ref={slideHolderRef}>
        {slidesClone.map((slide, index) => (
          <div className="slide_two" key={index}>
            <img src={slide.imageUrl} alt={'slide_two ' + index} className="image" />
          </div>
        ))}
      </div>

      <button className="left-arrow" onClick={nextSlide}>LEFT</button>
      <button className="right-arrow" onClick={nextSlide}>RIGHT</button>
    </section>
  );
};

export default MultiSlideWindow;
