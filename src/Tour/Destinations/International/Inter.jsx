import React from 'react'
import Header from '../../Common/Header/Header'
import Footer from '../../Common/Footer/Footer'
import './Inter.css'
import { Link } from 'react-router-dom'
const Region = () => {
    const intern = [
        {
            img: 'https://www.tourmyindia.com/imagess/bhutan1-tours.webp',
            name: 'Bhutan Tours',
            
        },
        {
            img: 'https://www.tourmyindia.com/imagess/thailand1-tours.webp',
            name: 'Thailand Tours',
       
        },
        {
            img: 'https://www.tourmyindia.com/imagess/nepal1-tours.webp',
            name: 'Nepal Tours',
          
        },
        {
            img:'https://www.tourmyindia.com/imagess/dubai1-tours.webp',
            name: 'Dubai Tours',
        
        },
        {
            img: 'https://www.tourmyindia.com/imagess/malaysia1-tours.webp',
            name: 'Malaysia Tours',
          
        },
        {
            img: 'https://www.tourmyindia.com/imagess/maldives1-tours.webp',
            name: 'Maldives Tours',
        },
        {
            img: 'https://www.tourmyindia.com/imagess/indonesia1-tours.webp',
            name: 'Indonesia Tours',
        },
        {
            img: 'https://www.tourmyindia.com/imagess/singapore1-tours.webp',
            name: 'Singapore Tours',
        },
        {
            img: 'https://www.tourmyindia.com/imagess/vietnam1-tours.webp',
            name: 'Vietnam Tours',
          
        },
        {
            img: 'https://www.tourmyindia.com/imagess/srilanaka-package.webp',
            name: 'Hong Kong Tours'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/australia1-tours.webp',
            name: 'Australia Tours',
        },
        {
            img:'https://www.tourmyindia.com/imagess/myanmar1-tours.webp',
            name:'Myanmar Tours'

        }
    ]
    
    
    return (
        <>
            <Header />
            <div className='region'>
                <h1>International Holiday Packages</h1>
               
                <div className='intcon'>
                    {
                        intern.map((value) => {
                            return (
                                <>
                                    
                                        <div className='intbox' key={value.id}>
                                            
                                            <img src={value.img} className='himg' alt={value.name} />
                                            
                                          
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