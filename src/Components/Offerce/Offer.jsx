import React from "react";
import "./Offer.css"
import Offers from '../Assets/offer.png'

function Offer() {
  return (
    <div>
      <div className="offer">
        <div className="offer-left">
          <h1>Exclusive</h1>
          <h1>Offerce for you</h1>
          <p>Only on best sellers Products</p>
          <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={Offers} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Offer;
