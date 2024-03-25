import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

function Item({ props }) {
  return (
    <>
      <div className="item">
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} className="iImag" src={props.image} alt="" /></Link>

        <div className="item-contant">
          <p>{props.name}</p>
          <div className="item-prices">
            <div className="new-item-price">${props.new_price}</div>
            <div className="old-item-price">${props.old_price}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
