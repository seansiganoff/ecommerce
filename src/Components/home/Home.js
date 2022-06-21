import React from 'react'
import './home.css'
import WatchList from '../watches/WatchList';


export default function Home() {
  const datejusttwo = {
    url: require('../../images/datejusttwo.webp'),
    price: '$12,000',
    model: "DATEJUST",
    heading: "THE CLASSIC WATCH OF REFERENCE",
    description: "THE OYSTER PERPETUAL DATEJUST IS THE EPITOME OF THE CLASSIC ROLEX WATCH.",
    info: "Created in 1945, the Datejust was the first self-winding waterproof chronometer wristwatch to display the date in a window at 3 o'clock on the dial hence its name. With its timeless aesthetics, functions and rich history, the Datejust is a watchmaking icon and one of the brands most recognizable watches."

    
  }
  const president = {
    url: require('../../images/gold.webp'),
    price: '$42,500',
    model: "DAY-DATE 40",
    heading: "PRESIDENTIAL",
    description: "THE OYSTER PERPETUAL DAY-DATE 40 IN 18 CT YELLOW GOLD WITH A GREEN DIAL, FLUTED BEZEL AND A PRESIDENTIAL BRACELET.",
    info: "The Day-Date was the first watch to indicate the day of the week spelt out in full when it was first presented in 1956."

  }
  
  const president2 = {
    url: require('../../images/platinum.webp'),
    price: '$49,000',
    model: "DAY-DATE 40",
    heading: "PRESIDENTIAL",
    description: "THE OYSTER PERPETUAL DAY-DATE 40 IN 18 CT WHITE GOLD WITH A GRAY DIAL, FLUTED BEZEL AND A PRESIDENTIAL BRACELET.",
    info: "The Day-Date was the first watch to indicate the day of the week spelt out in full when it was first presented in 1956."

  }

  const gmt = {
    url: require('../../images/gmt.webp'),
    price: '$37,500',
    model: "GMT MASTER",
    heading: "THE COSMOPOLITAN WATCH",
    description: "Designed to show the time in two different time zones simultaneously, the GMT-Master, launched in 1955, was originally developed as a navigation instrument for professionals criss-crossing the globe.",
    info: "Heir to the original model, the GMT-Master II was unveiled in 1982, with a new movement ensuring ease of use. Its combination of peerless functionality, robustness and instantly recognizable aesthetics has attracted a wider audience of world travellers."

  }

  const daytona = {
    url: require('../../images/daytona.webp'),
    price: '$37,500',
    model: "DAYTONA",
    heading: "COSMOGRAPH DAYTONA",
    description: "THIS OYSTER PERPETUAL COSMOGRAPH DAYTONA IN 18 CT GOLD WITH A WHITE AND GOLD DIAL AND AN OYSTERFLEX BRACELET, FEATURES A BLACK CERACHROM BEZEL WITH TACHYMETRIC SCALE.",
    info: "This chronograph was designed to be the ultimate timing tool for endurance racing drivers. More than 50 years after its creation, the Cosmograph Daytona remains in a class of its own among sport chronographs and continues to transcend time."

  }
  
  const sub = {
    url: require('../../images/sub.webp'),
    price: '$18,500',
    model: "SUBMARINER",
    heading: "THE REFERENCE AMONG DIVERS' WATCHES",
    description: "THE OYSTER PERPETUAL SUBMARINER IS A REFERENCE AMONG DIVER'S WATCHES: IT IS THE WATCH THAT UNLOCKED THE DEEP.",
    info: "Launched in 1953, the Submariner was the first divers' wristwatch waterproof to a depth of 100 metres (330 feet). This was the second great breakthrough in the technical mastery of waterproofness, following the invention of the Oyster, the world’s first waterproof wristwatch, in 1926. In watchmaking, the Submariner represented a historic turning point; it set the standard for divers’ watches. Today, the Submariner is waterproof to a depth of 300 metres (1,000 feet)."

  }
 
  
  return (
    <div className='header'>
        <div className='header-overlay'>
            <h1>Welcome to the world of watches</h1>
        </div>
        <WatchList 
        watch1={datejusttwo}
        watch2={president}
        watch3={president2}
      />

      <WatchList 
        watch1={sub}
        watch2={gmt}
        watch3={daytona}
      />
    </div>
  )
}
