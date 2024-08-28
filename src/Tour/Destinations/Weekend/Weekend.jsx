import React from 'react'
import Header from '../../Common/Header/Header'
import Footer from '../../Common/Footer/Footer'
import './Weekend.css'
import { Link } from 'react-router-dom'
const Region = () => {
    const week= [
        {
            img: 'https://www.tourmyindia.com/imagess/delhi-tour.webp',
            name: 'Weekend Trips From Delhi',
            packs: '25 Tour Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/mumbai-tour.webp',
            name: 'Weekend Trips From Mumbai',
            packs: '20 Tour Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/banglore-tour.webp',
            name: 'Weekend Trips From Banglore',
            packs: '25 Tour Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/chennai-tour.webp',
            name: 'Weekend Trips From Chennai',
            packs: '25 Tour Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/hyderabad-tour.webp',
            name: 'Weekend Trips From Hyderabad',
            packs: '25 Tour Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/cochin-tour.webp',
            name: 'Weekend Trips From Cochin',
            packs: '25 Tour Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/pune-tour.webp',
            name: 'Weekend Trips From Pune',
            packs: '25 Tour Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/nagpur-tour.webp',
            name: 'Weekend Trips From Nagpur',
            packs: '25 Tour Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/chandigarh-tour.webp',
            name: 'Weekend Trips From Chandigarh',
            packs: '25 Tour Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/jaipur-tour.webp',
            name: 'Weekend Trips From Jaipur',
            packs: '25 Tour Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/ahmedabad-tour.webp',
            name: 'Weekend Trips From Ahmdabad',
            packs: '25 Tour Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/heritage-tourism.webp',
            name: 'Weekend Trips From Agra',
            packs: '25 Tour Packages'
        },
        
        
    ]
    
    
    return (
        <>
            <Header />
            <div className='region'>
                <h1>Top Weekend Destinations</h1>
               
                <div className='wcon'>
                    {
                        week.map((value) => {
                            return (
                                <>
                                    
                                        <div className='wbox' key={value.id}>
                                            
                                            <img src={value.img} className='himg' alt={value.name} />
                                            
                                            <div className='hpack'>{value.packs}</div>
                                            <div className='hname'>{value.name}</div>
                                            <Link to={`/booktour/${value.name}`}>
                      <button className="book">Book A Trip</button>
                    </Link>
                                        </div>
                                    
                                </>
                            )
                        })
                    }
                </div>
                
                
            
            </div>
            <Footer />
        </>
    )
}

export default Region