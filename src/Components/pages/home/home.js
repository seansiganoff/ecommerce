import React from 'react';
import './home.css'
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from '../../imagecarousel/ImageCarousel';




export default function Home() {
    const navigate = useNavigate();


    useEffect(() => {
        changeBackground()
        window.scrollTo(0, 0)
    }, []);

    

    
///////////////////////////////// blackout background and rolex logo on main page /////////////////////////////////
  
    let changeBackground = () => {

        //production settings for blackout screen is: https://seans-rolex-watches.netlify.app/
        //none production settings for blackout screen is: http://localhost:3000/
        if(document.URL === 'https://seans-rolex-watches.netlify.app/') {
            if(window.scrollY > 150) {
                document.getElementById('blackout').style.background = 'rgba(0, 0, 0)';
                document.getElementById('header-logo-container').style.opacity = '0';
                document.getElementById('header-logo-container').style.transition = 'visibility 0s 0.5s, opacity 0.5s linear';
            } else {
                document.getElementById('blackout').style.background = 'rgba(0, 0, 0, 0.457)';
                document.getElementById('header-logo-container').style.opacity = '1';
                document.getElementById('header-logo-container').style.transition = 'opacity 1s linear';
                
            }
        }
        
    }
    
    window.addEventListener('scroll', changeBackground)

    

    

    

      function info() {
        return (
            <div>
                <div className='description-container'>
                    <div className='description'>
                        <h2>ROLEX WATCHES ARE CRAFTED WITH SCRUPULOUS ATTENTION TO DETAIL.</h2>
                        <p>
                            Explore the Rolex collection of prestigious, high-precision timepieces. 
                            Rolex offers a wide assortment of Classic and Professional watch models to suit any wrist. 
                            Discover the broad selection of Rolex watches to find a perfect combination of style and functionality.
                        </p>
                        <button className='carousel-button'>VIEW COLLECTION</button>
                    </div>
                </div>
                <h6 className='info-h1 reveal'>EVERY ROLEX TELLS A STORY</h6>
                <div className='header-info-left'>
                        <img className='header-info-left-img' alt='watch' src={require('../../../images/sssubbackground.jpg')} onClick={() => navigate('/watches')}/>
                    <h4>
                    Introduced in 1953, the Rolex Submariner was the first diving watch water-resistant to 100m. 
                    The watch came fitted with a rotating 60-minute timing bezel to help divers keep track of how long they've spent underwater, 
                    and the dial was furnished with plenty of luminous material to ensure readability in the murkiest of waters. 
                    </h4>
                </div>
                <div className='header-info-right'>
                    <h4>
                    The Rolex Datejust was introduced in 1945 and appeared very similar to the Rolex Bubbleback. This was also the same year of the 40 year anniversary of the Rolex company. Introduced as the world's first pressure-proof, self-winding calendar wrist chronometer which automatically changed the date in its dial window.
                    </h4>
                        <img className='header-info-right-img' alt='watch' src={require('../../../images/hhbackground.webp')} onClick={() => navigate('/watches')}/>
                </div>
                <div className='header-info-left'>
                        <img className='header-info-left-img' alt='watch' src={require('../../../images/master.jpg')} onClick={() => navigate('/watches')}/>
                    <h4>
                    The Day-Date earned the nickname the "President" when Rolex apparently gave one to then President of the United States Dwight Eisenhower. Since then the "President" gained popularity, and is the fasting selling rolex, ever.
                    </h4>
                </div>
            </div>
        )
    }
        
    
      


  return (
    <motion.div className='header' initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 1}}} exit={{opacity: 0}} >
        <div className='header-background'>
            <div className='header-overlay-container' id='blackout'>
                <div className='header-logo-container' id='header-logo-container'>
                    <img alt='logo' className='header-logo' src={require('../../../images/logo3.png')} />
                    <h1 className='header-h1'>ROLEX</h1>
                </div>
            </div>
        </div>
        {info()}
        <br />
        <div className='paralax-image'>

        </div>
        {ImageCarousel()}
        
    </motion.div>
  )
}
