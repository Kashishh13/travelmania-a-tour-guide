import React, { Component } from "react";
import Slider from "react-slick";
import './slider1.css'
import { Link } from "react-router-dom";
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay:true,
    };
    return (
      <div className="ims">
        <Slider {...settings}>
          <div>
          <Link to='/destinations'>
            <img className='imm' src="https://www.tourmyindia.com/imagess/adi-kailash.webp"/>
            </Link>
            <h3>Kailash</h3>
          
          </div>

          <div>
          <Link to='/destinations'>
            <img className='imm' src="https://www.tourmyindia.com/imagess/kedarnath.webp" ></img>
            </Link>
        <h3>Kedarnath</h3>
          </div>
          <div>
          <Link to='/destinations'>
            <img className='imm' src="https://www.tourmyindia.com/imagess/tajmahal.webp" ></img>
            </Link>
        <h3>Taj Mahal</h3>
          </div>
          <div>
          <Link to='/destinations'>
            <img className='imm' src="https://www.tourmyindia.com/imagess/tiger-banner.webp"></img>
            </Link>
            <h3>Wildlife</h3>
          </div>
          <div>
          <Link to='/destinations'>
            <img className="imm" src="https://www.tourmyindia.com/imagess/kerala-banner.webp"></img>
            </Link>
          <h3>Kerela</h3>
          </div>
          <div>
          <Link to='/destinations'>
            <img className="imm" src="https://www.tourmyindia.com/imagess/sikkim-banner.webp"></img>
            </Link>
            <h3>Sikkim</h3>
          </div>
          <div>
          <Link to='/destinations'>
            <img className="imm" src="https://www.tourmyindia.com/imagess/frozen-river.webp" ></img>
            </Link>
            <h3>Rivers</h3>

          </div>
          <div>
          <Link to='/destinations'>
            <img className="imm" src="https://www.tourmyindia.com/imagess/maharaja1-express.webp"></img>
            </Link>
      <h3>Hotels</h3>
          </div>
          <div>
          <Link to='/destinations'>
            <img className="imm" src="https://www.tourmyindia.com/imagess/kashmir-banner.webp"></img>
            </Link>
            <h3>Kashmir</h3>
          </div>
          <div>
          <Link to='/destinations'>
            <img className="imm" src="https://www.tourmyindia.com/imagess/up-package.webp" alt=''></img>
            </Link>
            <h3>Haridwar</h3>
          </div>
          <div>
          <Link to='/destinations'>
            <img className="imm" src="https://www.tourmyindia.com/imagess/uttarakhand01-package.webp"></img>
            </Link>
         <h3>Uttarakhand</h3>
          </div>
          <div>
          <Link to='/destinations'>
            <img className="imm" src="https://www.tourmyindia.com/imagess/delhi-package.webp" alt=""></img>
            </Link>
        <h3>Delhi</h3>
          </div>
        </Slider>
      </div>
    );
  }
}