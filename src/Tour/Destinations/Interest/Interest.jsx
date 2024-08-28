import React from "react";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import "./Interest.css";
import { Link } from "react-router-dom";
const Region = () => {
  const wild = [
    {
      img: "https://www.tourmyindia.com/imagess/india-tiger.webp",
      name: "India Tiger Tour",
      packs: "13 Nights - 14 Days",
    },
    {
      img: "https://www.tourmyindia.com/imagess/golden-tiger.webp",
      name: "Tiger Safari Expedition",
      packs: "9 Nights - 10 Days",
    },
    {
      img: "https://www.tourmyindia.com/imagess/north-tiger.webp",
      name: "North India Birding",
      packs: "13 Nights - 14 Days",
    },
  ];
  const hill = [
    {
      img: "https://www.tourmyindia.com/imagess/kashmir-hills.webp",
      name: "Best of Kashmir",
      packs: "5 Nights - 6 Days",
    },
    {
      img: "https://www.tourmyindia.com/imagess/himachal-hills.webp",
      name: "Himachal Hill Station",
      packs: "9 Nights - 10 Days",
    },
    {
      img: "https://www.tourmyindia.com/imagess/tawang-hills.webp",
      name: "Tawang Hill Station",
      packs: "8 Nights - 9 Days",
    },
  ];
  const pil = [
    {
      img: "https://www.tourmyindia.com/imagess/chardham.webp",
      name: "Chardham Tour",
      packs: "11 Nights - 12 Days",
    },
    {
      img: "https://www.tourmyindia.com/imagess/kedarnath-temple.webp",
      name: "Badrinath Kedarnath ",
      packs: "7 Nights - 8 Days",
    },
    {
      img: "https://www.tourmyindia.com/imagess/hemkund-sahib.webp",
      name: "Hemkund Sahib Yatra",
      packs: "8 Nights - 9 Days",
    },
  ];
  const her = [
    {
      img: "https://www.tourmyindia.com/imagess/golden-heritage.webp",
      name: "Golden Triangle Tour",
      packs: "6 Nights - 7 Days",
    },
    {
      img: "https://www.tourmyindia.com/imagess/gujrat-heritage.webp",
      name: "Best of Gujarat",
      packs: "9 Nights - 10 Days",
    },
    {
      img: "https://www.tourmyindia.com/imagess/rajasthan-heritage.webp",
      name: "Forts Tour of Rajasthan",
      packs: "8 Nights - 9 Days",
    },
  ];
  const beach = [
    {
      img: "https://www.tourmyindia.com/imagess/andaman-beach.webp",
      name: "Andaman Beach Tour",
      packs: "6 Nights - 7 Days",
    },
    {
      img: "https://www.tourmyindia.com/imagess/daman-beach.webp",
      name: "Daman Beach Tour",
      packs: "2 Nights - 3 Days",
    },
    {
      img: "https://www.tourmyindia.com/imagess/lakshdweep-beach.webp",
      name: "Lakshadweep Beach",
      packs: "4 Nights - 5 Days",
    },
  ];
  const hon = [
    {
      img: "https://www.tourmyindia.com/imagess/manali-honeymoon.webp",
      name: "Kullu Manali Tour",
      packs: "6 Nights - 7 Days",
    },
    {
      img: "https://www.tourmyindia.com/imagess/kashmir-honeymoon.webp",
      name: "Kashmir Tour",
      packs: "2 Nights - 3 Days",
    },
    {
      img: "https://www.tourmyindia.com/imagess/goa-honeymoon.webp",
      name: "Goa Tour",
      packs: "4 Nights - 5 Days",
    },
  ];
  const trek = [
    {
      img: "https://www.tourmyindia.com/imagess/adi-kailash-trek.webp",
      name: "Adi Kailash Trek",
      packs: "9 Nights - 10 Days",
    },
    {
      img: "https://www.tourmyindia.com/imagess/kanchenjunga-trek.webp",
      name: "Kashmir Trek",
      packs: "10 Nights - 11 Days",
    },
    {
      img: "https://www.tourmyindia.com/imagess/manimahesh-kailash-trek.webp",
      name: "Manimahesh Trek",
      packs: "10 Nights - 11 Days",
    },
  ];

  return (
    <>
      <Header />
      <div className="region">
        <h1>Packages By Interest</h1>
        <h4>WildLife</h4>
        <div className="icon">
          {wild.map((value) => {
            return (
              <>
                <div className="ibox" key={value.id}>
                  <img src={value.img} className="himg" alt={value.name} />
                  <div className="det">
                    <div className="hpack">{value.packs}</div>
                    <div className="hname">{value.name}</div>
                    <Link to={`/booktour/${value.name}`}>
                      <button className="book">Book A Trip</button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <h4>Hill Station</h4>
        <div className="icon">
          {hill.map((value) => {
            return (
              <>
                <div className="ibox" key={value.id}>
                  <img src={value.img} className="himg" alt={value.name} />
                  <div className="det">
                    <div className="hpack">{value.packs}</div>
                    <div className="hname">{value.name}</div>
                    <Link to={`/booktour/${value.name}`}>
                      <button className="book">Book A Trip</button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <h4>Pilgrimage</h4>
        <div className="icon">
          {pil.map((value) => {
            return (
              <>
                <div className="ibox" key={value.id}>
                  <img src={value.img} className="himg" alt={value.name} />
                  <div className="det">
                    <div className="hpack">{value.packs}</div>
                    <div className="hname">{value.name}</div>
                    <Link to={`/booktour/${value.name}`}>
                      <button className="book">Book A Trip</button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <h4>Heritage</h4>
        <div className="icon">
          {her.map((value) => {
            return (
              <>
                <div className="ibox" key={value.id}>
                  <img src={value.img} className="himg" alt={value.name} />
                  <div className="det">
                    <div className="hpack">{value.packs}</div>
                    <div className="hname">{value.name}</div>
                    <Link to={`/booktour/${value.name}`}>
                      <button className="book">Book A Trip</button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <h4>Beach</h4>
        <div className="icon">
          {beach.map((value) => {
            return (
              <>
                <div className="ibox" key={value.id}>
                  <img src={value.img} className="himg" alt={value.name} />
                  <div className="det">
                    <div className="hpack">{value.packs}</div>
                    <div className="hname">{value.name}</div>
                    <Link to={`/booktour/${value.name}`}>
                      {" "}
                      <button className="book">Book A Trip</button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <h4>Honeymoon</h4>
        <div className="icon">
          {hon.map((value) => {
            return (
              <>
                <div className="ibox" key={value.id}>
                  <img src={value.img} className="himg" alt={value.name} />
                  <div className="det">
                    <div className="hpack">{value.packs}</div>
                    <div className="hname">{value.name}</div>
                    <Link to={`/booktour/${value.name}`}>
                      {" "}
                      <button className="book">Book A Trip</button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <h4>Trekking</h4>
        <div className="icon">
          {trek.map((value) => {
            return (
              <>
                <div className="ibox" key={value.id}>
                  <img src={value.img} className="himg" alt={value.name} />
                  <div className="det">
                    <div className="hpack">{value.packs}</div>
                    <div className="hname">{value.name}</div>
                    <Link to={`/booktour/${value.name}`}>
                      {" "}
                      <button className="book">Book A Trip</button>
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Region;
