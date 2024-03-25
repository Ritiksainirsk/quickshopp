import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopCantext";

export default function CartItems() {
  const { AllProduct, cartItems, removeFromCart,getTotalAmount, } = useContext(ShopContext);

  console.log(getTotalAmount())

  // console.log(cartItems)
  return (
    <div className="cartitem">
      <div className="cartitems-frormat-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p className="cut">Quantity</p>
        <p className="cut">Total</p>
        <p className="cut">Remove</p>
      </div>
      <hr />
      {AllProduct.map((e) => {
        // console.log(cartItems[e.id])
        if (cartItems[e.id]) {
          return (
            <div className="cartitem-format cartitems-frormat-main">
              <img src={e.image} alt="" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <p className="quantity">{cartItems[e.id]}</p>
              <p>${e.new_price * cartItems[e.id]}</p>
              <p
                className="remove"
                onClick={() => {
                  removeFromCart(e.id);
                }}
              >
                X
              </p>
            </div>
          );
        }
        return null;
      })}

      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-items">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Total</p>
              <p>${getTotalAmount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promocode, Enter it here</p>
          <div className="cartitem-promobox">
            <input type="text" placeholder="Promo Code"/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
