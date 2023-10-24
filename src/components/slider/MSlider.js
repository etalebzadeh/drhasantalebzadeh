import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./MSlider.css"



function MSlider(props) {
    
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    
  return (
    <div className='mslider'>
        <p className='slider-title'>
          نمونه کارهای اخیر 
        </p>
        <Carousel responsive={responsive}>
            
            {props.slides.map((slide, index) => (
            <div className='card' key={index}>
                <img className='product--image' src={slide.imageUrl} alt={'slide_two ' + index} />                
                <div>ابدومینوپلاستی</div>
            </div>
            ))} 
            
        </Carousel>;
  </div>
  )
}

export default MSlider