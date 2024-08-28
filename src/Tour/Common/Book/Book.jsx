import React from "react";
import { Link, useParams } from "react-router-dom";
import Alldata from "../AllData/AllData";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FaHotel, FaCar } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import "./Book.css";
const Book = () => {
  const { id } = useParams();
  const des = Alldata.find((des) => des.name === id);
  return (
    <>
      <Header />
      <div className="main">
        <img src={des.img} alt={des.name} />
        <div className="det">
          <h1>{des.name}</h1>
          <h3>Duration : {des.packs}</h3>
          <h4>Cost : {des.cost}</h4>

          <h1>Inclusions</h1>
          <div className="items">
            <p>Accomodation</p>
            <i>
              <FaHotel />
            </i>
            <p>Transport</p>
            <i>
              <FaCar />
            </i>
            <p>Meals</p>
            <i>
              <GiHotMeal />
            </i>
          </div>

          <form>
            <div className="name">
              <input type="text" placeholder="Your name" required></input>
            </div>
            <div className="mobile">
              <input type="text" placeholder="Mobile Number" required></input>
            </div>
            <Link to='/'>
            <button
              className="confirm"
              onClick={() =>
                alert(
                  "Your Booking Is Confirmed. Our Team will contact you soon"
                )
              }
            >
              Confirm Booking
            </button>
            </Link>
          </form>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Book;
