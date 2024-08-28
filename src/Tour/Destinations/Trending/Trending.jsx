import React from 'react'
import Header from '../../Common/Header/Header'
import Footer from '../../Common/Footer/Footer'
import './Trending.css'
import { Link } from 'react-router-dom'
const Region = () => {
    const trend = [

        {
            img: 'https://www.tourmyindia.com/imagess/uttarakhand02-package.webp',
            name: 'Uttarakhand',
            packs: '50+ Packages'
        }, 
        {
            img: 'https://www.tourmyindia.com/imagess/kerala02-package.webp',
            name: 'Kerela',
            packs: '40+ Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/sikkim01-package.webp',
            name: 'Sikkim',
            packs: '30+ Packages'
        },
        
        {
            img: 'https://www.tourmyindia.com/imagess/bhutan-package.webp',
            name: ' Bhutan',
            packs: '20+ Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/thailand-package.webp',
            name: 'Thailand',
            packs: '10+ Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/srilanaka-package.webp',
            name: 'Sri Lanka',
            packs: '20+ Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/rajasthan01-package.webp',
            name: 'Rajasthan',
            packs: '20+ Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/maldives-package.webp',
            name: 'Maldives',
            packs: '5+ Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/dubai-package.webp',
            name: 'Dubai',
            packs: '10+ Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/singapore-package.webp',
            name: 'Singapore',
            packs: '10+ Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/indonesia-package.webp',
            name: 'Indonesia',
            packs: '8+ Packages'
        },
        {
            img: 'https://www.tourmyindia.com/imagess/nepal-package.webp',
            name: 'Nepal',
            packs: '20+ Packages'
        },

       
       
    ]


    return (
        <>
            <Header />
            <div className='region'>
                <h1>Top Trending Destinations</h1>

                <div className='tcon'>
                    {
                        trend.map((value) => {
                            return (
                                <>

                                    <div className='tbox' key={value.id}>

                                        <img src={value.img} className='himg' alt={value.name} />

                                        <div className='hpack'>{value.packs}</div>
                                        <div className='hname'>{value.name}</div>
                                        <Link to={`/booktour/${value.name}`}>  <button className='book'>Book A Trip</button>
                                   </Link> </div>

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


export default Region;
