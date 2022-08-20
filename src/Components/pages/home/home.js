import React from 'react';
import './home.css'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
    const [backgroundChange, setBackgroundChange] = useState(true);

    
    // blacks-out header background on scroll down
    const changeBackground = () => {
        if(window.scrollY > 150) {
            setBackgroundChange(false)
        } else {
            setBackgroundChange(true);
        }
    } 

    useEffect(() => {
        changeBackground()
        window.scrollTo(0, 0)
    }, []);

    window.addEventListener("scroll", changeBackground)

    

    

      function info() {
        return (
            <div>
                <h6 className='info-h1'>TIMELESS CLASSICS</h6>
                <div className='header-info-left'>
                    <Link to="/watches">
                        <img alt='watch' src={require('../../../images/sssubbackground.jpg')} />
                    </Link>
                    <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusamus consectetur harum soluta. 
                        Neque repellendus temporibus iusto maxime eum blanditiis dolorum perferendis modi! Magnam repellat facilis eveniet dolores 
                        perspiciatis illum!
                    </h4>
                </div>
                
                
                <div className='header-info-right'>
                    <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusamus consectetur harum soluta. 
                        Neque repellendus temporibus iusto maxime eum blanditiis dolorum perferendis modi! Magnam repellat facilis eveniet dolores 
                        perspiciatis illum!
                    </h4>
                    <Link to="/watches">
                        <img alt='watch' src={require('../../../images/hhbackground.webp')} />
                    </Link>
                </div>
                <div className='header-info-left'>
                    <Link to="/watches">
                        <img alt='watch' src={require('../../../images/master.jpg')} />
                    </Link>
                    <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusamus consectetur harum soluta. 
                        Neque repellendus temporibus iusto maxime eum blanditiis dolorum perferendis modi! Magnam repellat facilis eveniet dolores 
                        perspiciatis illum!
                    </h4>
                </div>
            </div>
        )
    }
        
    


  return (
    <motion.div className='header' initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 1}}} exit={{opacity: 0}} >
        <div className='header-background'>
            <div className={backgroundChange ? 'header-overlay-container' : 'header-overlay-container-blackout'}>
                <div className='header-logo-container'>
                    <img alt='logo' className='header-logo' src={require('../../../images/logo3.png')} />
                    <h1 className='header-h1'>ROLEX</h1>
                </div>
            </div>
        </div>
        {info()}
    </motion.div>
  )
}
