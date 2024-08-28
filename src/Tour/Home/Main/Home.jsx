import React from 'react'
import Header from '../../Common/Header/Header'
import Slider1 from '../Slider/Slider1'
import './Home.css'
import Homed from '../HomeApi/Homed'
import spec from '../HomeApi/Spec'
import { FaStar } from "react-icons/fa6";
import logo from '../../Common/Images/travelmania-logo-01.jpg'
import thumb from '../../Common/Images/thumb.png'
import Footer from '../../Common/Footer/Footer'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
     <Header/>
    <div className='all'>
     <div className='one'>
     <h1>Let us plan you a
perfect <span>India Holiday</span></h1>
     </div>
     <div className='two'>Custom-Crafted Tour Packages for Unforgettable Holiday Experiences in India</div>
     <div className='con'>
        {
          Homed.map((value)=>{
            return(
              <>
              <Link to='/destinations' className='link'>
              <div className='box' key={value.id}>
              <div className='hname'>{value.name}</div>
              <div className='hpack'>{value.packs}</div>
              <img src={value.img} className='himg' alt={value.name}/>
              </div>
              </Link>
              </>
              )  
          })
        }
      </div>
      </div>
      {/* <Slider1/> */}
      <div className='three'>
<h1>Our Specializations</h1>
</div>
<div className='coon'>
        {
          spec.map((value)=>{
            return(
              <>
            
             
              <div className='boox' key={value.id}>
              <div className='hname'>{value.name}</div>
              <img src={value.img} className='himg' alt={value.name}/>
              <div className='hpack'>{value.des}</div>
             
             
              </div>

              

             
              </>
              )  
          })
        }
      </div>
      <div className='choose'>
        <h1>Guest Satisfaction is Our Goal;</h1>
        <h1>Valuable Feedback Matters to Us</h1>
        <ul>
        <li className='col'>Do Dham Yatra</li>
        <li>Kashmir Ladakh Trip</li>
        <li>Rathambore Visit</li>
        <li>View All</li>
        </ul>
        <div className='fle'>
          <img src='https://www.tourmyindia.com/imagess/gangotri-client.webp' alt=''></img>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYulCwomcXaHYkWjds1jifr-YD1VRt0Bezg&usqp=CAU' alt=''></img>
          <div className='exp'>
          <h1 className='nic'>Nice experience....</h1>
          
          <p className='des'>Tour of Do Dham - Yamunotri & Gangotri for 7 days from 10.09.23 to 16.09.23 Overall arrangements were very good. Our Darshan of both Yamunotri & Gangotri was very nice. Hotels arranged were good. Mr. MANAVENDRA of Tour My India coordinated the entire tour very nicely & he was kind enough to meet us personally at Dehradun.</p>
          <FaStar className='star' /><FaStar/><FaStar /><FaStar/><FaStar />
        <img src={logo} alt=''/>
        </div>

      </div>
      </div>
      <div className='why'>
        <h1>Why Choose Us ?</h1>
        <div className='co'>
          <div className='bo'>
            <img src={thumb} alt=''></img>
<h2>20+ Year Experience</h2>
<p>Boasting over two decades in the tourism and hospitality industry, Tour My India has amassed invaluable experience that sets us apart.</p>
          </div>
          <div className='bo'>
            <img src={thumb} alt=''></img>
<h2>A Team of Experts</h2>
<p>Our experienced team at Tour My India is more than just proficient; they are destination experts for every location within the mesmerizing landscape of India. Their knowledge is an invaluable asset for every traveler.</p>
          </div>
          <div className='bo'>
            <img src={thumb} alt=''></img>
<h2>Verified Hotels</h2>
<p>We offer a meticulously selected and verified list of high-grade hotels. Our partners consistently deliver top-notch service, ensuring an exceptional experience for our guests.</p>
          </div>
          <div className='bo'>
            <img src={thumb} alt=''></img>
<h2>Value for Money Tours</h2>
<p>With Tour My India, your vacation is not just about sightseeing; it's about creating memories that last a lifetime. Our holiday packages are hassle-free and designed with a focus on value for money. Trust us to weave unforgettable experiences into your journey, ensuring every moment you spend with us is well worth it.</p>
          </div>
        </div>
      </div>
      <div className='ind'>
        <div className='fle'>
          <div className='inc'>
            <h1>About Incredible India</h1>
            <p>Interesting and Intriguing, India offers incredible holiday experiences through its cultural, topography, and wildlife diversity. With these amazing and unique experiences, this south Asian country conveniently finds its way into the world tourism map as one of the finest destinations for a holistic vacation. India establishes its identity as the country of architectural masterpieces, making it an ideal travel destination to plan a heritage tour in the world. While Taj Mahal makes for the major draw on an India tour, there are a plethora of monuments and edifices in every India travel guide displaying the fine architecture and grandiose of different eras in the country.

The diverse Indian topography adorned with the impressive Himalayas; long stretches of coastline; expansive hot, cold and white salt deserts; dense forests; alpine meadows and lakes; and scenic waterfalls pique the tourists’ interest. Along with the best nature sightseeing tours, India offers an opportunity to visitors to have a little adventure of their own. The numerous spell-binding and less-trodden trails give trekking tour opportunities in South Asia unlike any other.

India Tours offers a chance to explore its biodiversity in the country's many national parks and wildlife reserves. An enthralling experience entails in the India wildlife tour packages that take tourists to the habitats of Royal Bengal Tigers, one-horned rhinos, and snow leopards amongst many rare, endangered, and unique species of flora and fauna.</p>
            </div>
            <div className='im'>
              <img src='https://www.tourmyindia.com/imagess/varanasi-india.webp' alt=''></img>
            </div>
        </div>
      </div>
      <div className='info'>
        <h1>Travel Information</h1>
        <div className='b'>
          <img src='https://www.tourmyindia.com/imagess/visiting-india.webp' alt=''></img>
        <div className='th'>
          <h1>Best Time To Visit In India</h1>
          <p>The best time to visit India for holidays depends on the type of experience you seek. The tourism season in India varies across regions due to its diverse climate. The peak tourism season in India starts from September to June. For wildlife enthusiasts, winter is ideal as national parks are open, and wildlife sightings are abundant. Hill stations are most enjoyable during summer to escape the scorching heat of the plains. For trekking and hiking adventures, winter, monsoon, autumn, and spring offer pleasant weather. Plan your trip according to your preferences, and you'll discover India's incredible beauty and cultural richness, making it an unforgettable holiday destination. September to April can be considered an ideal time to explore India for tourism holidays.</p>
        </div>
        </div>
        <div className='b'>
          <img src='https://www.tourmyindia.com/imagess/travel-bus.webp' alt=''></img>
        <div className='th'>
          <h1>How to get around in India?</h1>
          <p>Traveling to India is a seamless experience, thanks to its well-developed transportation network. The country is easily accessible through various modes of transport, ensuring a smooth entry for tourists from around the world. India boasts an extensive road connectivity, making it convenient for travelers to explore different regions. The rail network, with an extensive network of trains, offers a scenic and comfortable journey to various destinations.</p>
        </div>
        </div>
        <div className='b'>
          <img src='https://www.tourmyindia.com/imagess/travel-tips.webp' alt=''></img>
        <div className='th'>
          <h1>Must-Follow Travel Tips for Exploring India</h1>
          <p>When visiting India, it's essential to check out important travel tips to ensure a smooth and enjoyable trip. Follow recommended guidelines for packing, cultural respect, local transportation, and staying safe. These tips will help you make the most of your India tour and have a memorable experience.</p>
        </div>
        </div>
      </div>
      <div className='searches'>
        <h1>Top Searches For India Tours</h1>
        <ul>
          <Link to='/destinations'><li>Ranthambore National Park</li></Link>
          <Link to='/destinations'> <li>Agra Tour</li></Link>
          <Link to='/destinations'><li>Sikkim Tour</li></Link>
          <Link to='/destinations'><li>Top 10 Places To Visit In India</li></Link>
          <Link to='/destinations'><li>Golden Triangle India</li></Link>
          <Link to='/destinations'><li>Museums In India</li></Link>
          <Link to='/destinations'><li>Tiger Tours</li></Link>
          <Link to='/destinations'><li>Kerala Tourist Places</li></Link>
          <Link to='/destinations'><li>Corbett National Park</li></Link>
          <Link to='/destinations'><li>Top Sikkim Tourist Places</li></Link>
          <Link to='/destinations'><li>Jaipur Tour</li></Link>
          <Link to='/destinations'><li>Places To Visit In Himachal Pradesh</li></Link>
          <Link to='/destinations'><li>Garhwal Trek</li></Link>
          <Link to='/destinations'><li>Places To Visit In Uttarakhand</li></Link>
          <Link to='/destinations'> <li>South India Tour</li></Link>
         
          <Link to='/destinations'><li>Places To Visit In Rajasthan</li></Link>
          <Link to='/destinations'><li>Gujarat Places To Visit</li></Link>
          <Link to='/destinations'><li>Jammu and Kashmir Tourist Places</li></Link>
          <Link to='/destinations'> <li>Varanasi Tour</li></Link>
          <Link to='/destinations'><li>Ladakh Trek</li></Link>
          <Link to='/destinations'> <li>Hill Stations In India</li></Link>
         
          <Link to='/destinations'><li>Himalayas Trekking</li></Link>
          <Link to='/destinations'><li>Best Time For India Trekking</li></Link>
          <Link to='/destinations'><li>Trekking Peaks</li></Link>
          <Link to='/destinations'><li>Trekking In Uttarakhand</li></Link>
          <Link to='/destinations'><li>Places To Visit In Delhi</li></Link>
        </ul>
      </div>
      <Footer/>
     </>
   
  )
}

export default Home