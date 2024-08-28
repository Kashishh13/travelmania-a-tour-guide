import React from "react";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import "./Region.css";
import { Link } from "react-router-dom";
const Region = () => {
  const nregion = [
    {
      img: "https://www.tourmyindia.com/imagess/uttarakhand01-package.webp",
      name: "Uttarakhand",
      packs: "50+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/rajasthan-package.webp",
      name: "Rajasthan",
      packs: "30+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/up-package.webp",
      name: "Uttar Pradesh",
      packs: "25+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/himachal-package.webp",
      name: "Himachal",
      packs: "70+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/j&k-package.webp",
      name: "Jammu & Kashmir",
      packs: "10+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/ladakh-trend.webp",
      name: "Ladakh",
      packs: "40+ Packages",
    },
  ];
  const sregion = [
    {
      img: "https://www.tourmyindia.com/imagess/kerala-package.webp",
      name: "Kerela",
      packs: "40+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/karnataka-package.webp",
      name: "Karnataka",
      packs: "25+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/puducherry-package.webp",
      name: "Puducherry",
      packs: "10+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/tamilnadu-package.webp",
      name: "Tamil Nadu",
      packs: "20+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/andhra-package.webp",
      name: "Andhra Pradesh",
      packs: "15+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/telangana-package.webp",
      name: "Telengana",
      packs: "10+ Packages",
    },
  ];
  const eregion = [
    {
      img: "https://www.tourmyindia.com/imagess/sikkim-package.webp",
      name: "Sikkim",
      packs: "40+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/arunachal-package.webp",
      name: "Arunachal",
      packs: "15+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/meghalaya-package.webp",
      name: "Meghalaya",
      packs: "10+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/nagaland-package.webp",
      name: "Nagaland",
      packs: "20+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/wb-package.webp",
      name: "West Bengal",
      packs: "15+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/odisha-package.webp",
      name: "Odisha",
      packs: "10+ Packages",
    },
  ];
  const wregion = [
    {
      img: "https://www.tourmyindia.com/imagess/goa-package.webp",
      name: "Goa",
      packs: "40+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/gujarat-package.webp",
      name: "Gujarat",
      packs: "15+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/maharashtra-package.webp",
      name: "Maharashtra",
      packs: "10+ Packages",
    },
  ];
  const cregion = [
    {
      img: "https://www.tourmyindia.com/imagess/mp-package.webp",
      name: "Madhya Pradesh",
      packs: "40+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/ujjain-package.webp",
      name: "Ujjain",
      packs: "15+ Packages",
    },
    {
      img: "https://www.tourmyindia.com/imagess/bhopal-package.webp",
      name: "Bhopal",
      packs: "10+ Packages",
    },
  ];
  return (
    <>
      <Header />
      <div className="region">
        <h1>Explore Top Destinations by Region</h1>
        <h4>North India</h4>
        <div className="rcon">
          {nregion.map((value) => {
            return (
              <>
                <div className="rbox" key={value.id}>
                  <div className="hname">{value.name}</div>
                  <div className="hpack">{value.packs}</div>
                  <img src={value.img} className="himg" alt={value.name} />
                  <Link to={`/booktour/${value.name}`}>
                    {" "}
                    <button className="book">Book A Trip</button>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
        <h4>South India</h4>
        <div className="rcon">
          {sregion.map((value) => {
            return (
              <>
                <div className="rbox" key={value.id}>
                  <div className="hname">{value.name}</div>
                  <div className="hpack">{value.packs}</div>
                  <img src={value.img} className="himg" alt={value.name} />
                  <Link to={`/booktour/${value.name}`}>
                    {" "}
                    <button className="book">Book A Trip</button>
                  </Link>{" "}
                </div>
              </>
            );
          })}
        </div>
        <h4>East India</h4>
        <div className="rcon">
          {eregion.map((value) => {
            return (
              <>
                <div className="rbox" key={value.id}>
                  <div className="hname">{value.name}</div>
                  <div className="hpack">{value.packs}</div>
                  <img src={value.img} className="himg" alt={value.name} />
                  <Link to={`/booktour/${value.name}`}> <button className="book">Book A Trip</button></Link>
                </div>
              </>
            );
          })}
        </div>
        <h4>West India</h4>
        <div className="rcon">
          {wregion.map((value) => {
            return (
              <>
                <div className="rbox" key={value.id}>
                  <div className="hname">{value.name}</div>
                  <div className="hpack">{value.packs}</div>
                  <img src={value.img} className="himg" alt={value.name} />
                  <Link to={`/booktour/${value.name}`}>   <button className="book">Book A Trip</button></Link>
                </div>
              </>
            );
          })}
        </div>
        <h4>Central India</h4>
        <div className="rcon">
          {cregion.map((value) => {
            return (
              <>
                <div className="rbox" key={value.id}>
                  <div className="hname">{value.name}</div>
                  <div className="hpack">{value.packs}</div>
                  <img src={value.img} className="himg" alt={value.name} />
                  <Link to={`/booktour/${value.name}`}>   <button className="book">Book A Trip</button></Link>
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
