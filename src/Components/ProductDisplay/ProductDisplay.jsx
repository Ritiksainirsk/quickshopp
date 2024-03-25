import React, { useContext } from "react";
import "./ProductDisplay.css";
import starimg from "../Assets/star_icon.png";
import stardullimg from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopCantext";

export default function ProductDisplay(props) {
  const product = props.props;

  const {addToCart} = useContext(ShopContext)

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productDisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-main">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="product-stars">
          <img src={starimg} alt="" srcset="" />
          <img src={starimg} alt="" srcset="" />
          <img src={starimg} alt="" srcset="" />
          <img src={starimg} alt="" srcset="" />
          <img src={stardullimg} alt="" srcset="" />
          <p>123</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          The fetch logic may be needed in other components as well, so we will
          extract that into a custom Hook.Move the fetch logic to a new file to
          be used as a custom Hook:
        </div>

        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button className="addtocart-btn" onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        
      </div>
    </div>
  );
}
