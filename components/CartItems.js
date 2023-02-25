import { useState } from "react";
import { useDispatch } from "react-redux";
import nonVegIcon from "../assets/images/non-veg.png";
import vegIcon from "../assets/images/veg.png";
import IMG_CDN_URL from "../constants";
import { addCount, removeItem, subCount } from "../utils/cartSlice";
import QuantityItem from "./QuantityItem";
import { v4 as uuidv4 } from "uuid";

const CartItems = (props) => {
  const dispatch = useDispatch();

  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="cart-items">
      {props.cartItems.map((cartItem) => (
        <div className="cart-item" key={cartItem.id}>
          {cartItem.cloudinaryImageId ? (
            <img
              src={`${IMG_CDN_URL}${cartItem?.cloudinaryImageId}`}
              alt=""
              className="cart-item-image"
            />
          ) : (
            <img
              src="https://via.placeholder.com/200X120?text=Image+not+available"
              alt=""
              className="cart-item-image"
            />
          )}
          <div className="cart-item-description">
            <h2>{cartItem.name}</h2>
            {cartItem?.attributes?.vegClassifier === "NONVEG" ? (
              <div className="cart-item-type-container">
                <img src={nonVegIcon} className="menu-type" alt="" />
                <span>Non Veg</span>
              </div>
            ) : (
              <div className="cart-item-type-container">
                <img src={vegIcon} className="menu-type" alt="" />
                <span>Veg</span>
              </div>
            )}
            <h3>Rs. {cartItem.price / 100}</h3>

            <QuantityItem key={cartItem.id} cartItem={cartItem} O />
            <button
              className="btn btn-v3"
              onClick={() => removeFoodItem(cartItem)}
            >
              Remove Item
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
