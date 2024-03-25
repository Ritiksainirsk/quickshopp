import React from "react";
import Shopp from "../Assets/shopping-bag.png";
import "./Footer.css";
import Instagram from "../Assets/instagram_icon.png";
import Pintester from "../Assets/pintester_icon.png";
import Whatsapp from "../Assets/whatsapp_icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={Shopp} alt="" />
        <p>Shop</p>
      </div>

      <ul>
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={Instagram} alt="" srcset="" />
        </div>
        <div className="footer-icons-container">
          <img src={Pintester} alt="" srcset="" />
        </div>
        <div className="footer-icons-container">
          <img src={Whatsapp} alt="" srcset="" />
        </div>
      </div>

      <div className="copyright">
        <hr />
        <p>Copyright @ All right Reserved.</p>
      </div>
    </div>
  );
}
