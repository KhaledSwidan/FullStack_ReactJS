import React from 'react';
import shortid from 'shortid';
import homeImg from "../../images/home.jpg";
import "./home.css";
import Product from './Product';

const Home = () =>
{
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" src={homeImg} alt="" />
        <div className="home-row">
          <Product
            id={shortid.generate()}
            price={64}
            title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
            rating={5} />
          <Product />
        </div>
        <div className="home-row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home-row">
          <Product />
        </div>
      </div>
    </div>
  )
};

export default Home