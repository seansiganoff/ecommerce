import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import './ImageCarousel.css'



const ImageCarousel = () => {

  const navigate = useNavigate();

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
    <div className='carousel-section'>
      <div className='carousel-container'>
        <div className='carousel-text'>
          <h2>EACH ROLEX MODEL IS DISTINCT. SEE WHICH ONE TAILORS TO YOU. </h2>
          <p>Every Rolex is fully customizable. From the dial, bezel, clasp or band.</p>
        </div>
        <Carousel responsive={responsive}>
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <img src={require('../../images/gmt.png')} className="carousel-image"  alt='Rolex watch'/> 
              <div className='image-overlay' onClick={() => navigate('/watches')}>
                <button>VIEW COLLECTION</button>
              </div>
            </div>
            <h4>GMT</h4>
            <p>COLLECTION</p>
          </div>
          
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <img src={require('../../images/datess.png')} className="carousel-image" alt='Rolex watch'/>
              <div className='image-overlay' onClick={() => navigate('/watches')}>
              <button>VIEW COLLECTION</button>
              </div>
            </div>
            <h4>DATE</h4>
            <p>COLLECTION</p>
          </div>
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <img src={require('../../images/daytona.png')} className="carousel-image" alt='Rolex watch' />
              <div className='image-overlay' onClick={() => navigate('/watches')}>
              <button>VIEW COLLECTION</button>
              </div>
            </div> 
            <h4>DAYTONA</h4>
            <p>COLLECTION</p>
          </div>
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <img src={require('../../images/daytonagold.png')} className="carousel-image" alt='Rolex watch'/> 
              <div className='image-overlay' onClick={() => navigate('/watches')}>
              <button>VIEW COLLECTION</button>
              </div>
            </div>
            <h4>DAYTONA</h4>
            <p>COLLECTION</p>
          </div>
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <img src={require('../../images/skydwellerss.webp')} className="carousel-image" alt='Rolex watch'/> 
              <div className='image-overlay' onClick={() => navigate('/watches')}>
              <button>VIEW COLLECTION</button>
              </div>
            </div>
            <h4>DAYTONA</h4>
            <p>COLLECTION</p>
          </div>
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <img src={require('../../images/sub.png')} className="carousel-image" alt='Rolex watch'/> 
              <div className='image-overlay' onClick={() => navigate('/watches')}>
              <button>VIEW COLLECTION</button>
              </div>
            </div>
            <h4>SUBMARINER</h4>
            <p>COLLECTION</p>
          </div>
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <img src={require('../../images/subgold.webp')} className="carousel-image" alt='Rolex watch'/> 
              <div className='image-overlay' onClick={() => navigate('/watches')}>
              <button>VIEW COLLECTION</button>
              </div>
            </div>
            <h4>SUBMARINER</h4>
            <p>COLLECTION</p>
          </div>
          <div className='carousel-card'>
            <div className='carousel-image-container'>
              <img src={require('../../images/datejusttwo.png')} className="carousel-image" alt='Rolex watch'/> 
              <div className='image-overlay' onClick={() => navigate('/watches')}>
              <button>VIEW COLLECTION</button>
              </div>
            </div>
            <h4>DATEJUST II</h4>
            <p>COLLECTION</p>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default ImageCarousel