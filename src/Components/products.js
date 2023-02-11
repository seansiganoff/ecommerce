const products = [
    
        {
            id: 1,
            url: require('../images/datejusttwo.png'),
            price: 12000,
            model: "DATEJUST",
            heading: "THE CLASSIC WATCH OF REFERENCE",
            description: "THE OYSTER PERPETUAL DATEJUST IS THE EPITOME OF THE CLASSIC ROLEX WATCH.",
            info: "Created in 1945, the Datejust was the first self-winding waterproof chronometer wristwatch to display the date in a window at 3 o'clock on the dial hence its name. With its timeless aesthetics, functions and rich history, the Datejust is a watchmaking icon and one of the brands most recognizable watches.",
            class: 'ss',
            checkoutprice: 'price_1LbQ0uJ3KbyliwiasgDtUt4F'
        },
        
        {
            id: 2,
            url: require('../images/gold.png'),
            price: 42500,
            model: "DAY-DATE 40",
            heading: "PRESIDENTIAL",
            description: "THE OYSTER PERPETUAL DAY-DATE 40 IN 18 CT YELLOW GOLD WITH A GREEN DIAL, FLUTED BEZEL AND A PRESIDENTIAL BRACELET.",
            info: "The Day-Date was the first watch to indicate the day of the week spelt out in full when it was first presented in 1956.",
            class: 'gold',
            checkoutprice: 'price_1LbQ5TJ3KbyliwiaDbwD38AL',
        
        },
        
        {
            id: 3,
            url: require('../images/platinum.png'),
            price: 49000,
            model: "DAY-DATE 40",
            heading: "PRESIDENTIAL",
            description: "THE OYSTER PERPETUAL DAY-DATE 40 IN 18 CT WHITE GOLD WITH A GRAY DIAL, FLUTED BEZEL AND A PRESIDENTIAL BRACELET.",
            info: "The Day-Date was the first watch to indicate the day of the week spelt out in full when it was first presented in 1956.",
            class: 'gold',
            checkoutprice: 'price_1LbQJ9J3KbyliwiaW5WY1KK2'
        
        },
        
        {
            id: 4,
            url: require('../images/gmt.png'),
            price: 37500,
            model: "GMT MASTER",
            heading: "THE COSMOPOLITAN WATCH",
            description: "Designed to show the time in two different time zones simultaneously, the GMT-Master, launched in 1955, was originally developed as a navigation instrument for professionals criss-crossing the globe.",
            info: "Heir to the original model, the GMT-Master II was unveiled in 1982, with a new movement ensuring ease of use. Its combination of peerless functionality, robustness and instantly recognizable aesthetics has attracted a wider audience of world travellers.",
            class: 'hh',
            checkoutprice: 'price_1LbQPrJ3KbyliwiaiIBEbATC'
        
        },
        
        {
            id: 5,
            url: require('../images/daytona.png'),
            price: 37500,
            model: "DAYTONA",
            heading: "COSMOGRAPH DAYTONA",
            description: "THIS OYSTER PERPETUAL COSMOGRAPH DAYTONA IN 18 CT GOLD WITH A WHITE AND GOLD DIAL AND AN OYSTERFLEX BRACELET, FEATURES A BLACK CERACHROM BEZEL WITH TACHYMETRIC SCALE.",
            info: "This chronograph was designed to be the ultimate timing tool for endurance racing drivers. More than 50 years after its creation, the Cosmograph Daytona remains in a class of its own among sport chronographs and continues to transcend time.",
            class: 'gold',
            checkoutprice: 'price_1LbQdOJ3KbyliwianJOcRVTY'
        
        },
        
        {
            id: 6,
            url: require('../images/sub.png'),
            price: 18500,
            model: "SUBMARINER",
            heading: "THE REFERENCE AMONG DIVERS' WATCHES",
            description: "THE OYSTER PERPETUAL SUBMARINER IS A REFERENCE AMONG DIVER'S WATCHES: IT IS THE WATCH THAT UNLOCKED THE DEEP.",
            info: "Launched in 1953, the Submariner was the first divers' wristwatch waterproof to a depth of 100 metres (330 feet). This was the second great breakthrough in the technical mastery of waterproofness, following the invention of the Oyster, the world’s first waterproof wristwatch, in 1926. In watchmaking, the Submariner represented a historic turning point; it set the standard for divers’ watches. Today, the Submariner is waterproof to a depth of 300 metres (1,000 feet).",
            class: 'hh',
            checkoutprice: 'price_1LbQiSJ3KbyliwiaNzf7Y9q1'
        },
        
        {
            id: 7,
            url: require('../images/daytonagold.png'),
            price: 18500,
            model: "DAYTONA",
            heading: "THE REFERENCE AMONG DIVERS' WATCHES",
            description: "THE OYSTER PERPETUAL SUBMARINER IS A REFERENCE AMONG DIVER'S WATCHES: IT IS THE WATCH THAT UNLOCKED THE DEEP.",
            info: "Launched in 1953, the Submariner was the first divers' wristwatch waterproof to a depth of 100 metres (330 feet). This was the second great breakthrough in the technical mastery of waterproofness, following the invention of the Oyster, the world’s first waterproof wristwatch, in 1926. In watchmaking, the Submariner represented a historic turning point; it set the standard for divers’ watches. Today, the Submariner is waterproof to a depth of 300 metres (1,000 feet).",
            class: 'gold',
            checkoutprice: 'price_1LbQmJJ3KbyliwiaEZPLxBXa'
        },
        
        {
            id: 8,
            url: require('../images/datess.png'),
            price: 10000,
            model: "AIR-KING",
            heading: "THE REFERENCE AMONG DIVERS' WATCHES",
            description: "THE OYSTER PERPETUAL SUBMARINER IS A REFERENCE AMONG DIVER'S WATCHES: IT IS THE WATCH THAT UNLOCKED THE DEEP.",
            info: "Launched in 1953, the Submariner was the first divers' wristwatch waterproof to a depth of 100 metres (330 feet). This was the second great breakthrough in the technical mastery of waterproofness, following the invention of the Oyster, the world’s first waterproof wristwatch, in 1926. In watchmaking, the Submariner represented a historic turning point; it set the standard for divers’ watches. Today, the Submariner is waterproof to a depth of 300 metres (1,000 feet).",
            class: 'ss',
            checkoutprice: 'price_1LbQqkJ3Kbyliwia5rHkNxfd'
        
        },
        
        {
            id: 10,
            url: require('../images/gmtgold.png'),
            price: 37000,
            model: "DATE JUST",
            heading: "THE REFERENCE AMONG DIVERS' WATCHES",
            description: "THE OYSTER PERPETUAL SUBMARINER IS A REFERENCE AMONG DIVER'S WATCHES: IT IS THE WATCH THAT UNLOCKED THE DEEP.",
            info: "Launched in 1953, the Submariner was the first divers' wristwatch waterproof to a depth of 100 metres (330 feet). This was the second great breakthrough in the technical mastery of waterproofness, following the invention of the Oyster, the world’s first waterproof wristwatch, in 1926. In watchmaking, the Submariner represented a historic turning point; it set the standard for divers’ watches. Today, the Submariner is waterproof to a depth of 300 metres (1,000 feet).",
            class: 'gold',
            checkoutprice: 'price_1LbQujJ3KbyliwiaDyPDm14V'
        },
        
       
         
    
]




module.exports = {
    products

}