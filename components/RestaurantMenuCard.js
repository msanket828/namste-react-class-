import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCount, addItem, removeItem, subCount } from "../utils/cartSlice";
import nonVegIcon from "../assets/images/non-veg.png";
import vegIcon from "../assets/images/veg.png";
import IMG_CDN_URL from "../constants";
import QuantityItem from "./QuantityItem";

const RestaurantMenuCard = ({ item }) => {
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [count, setCount] = useState(1);
  const handleInc = () => {
    setCount((prevCount) => prevCount + 1);
    dispatch(addCount({ ...item, itemScore: count + 1 }));
  };
  const handleDec = () => {
    if (count < 2) {
      setCount(count);
    } else {
      setCount((prevCount) => prevCount - 1);
      dispatch(subCount({ ...item, itemScore: count - 1 }));
    }
  };
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
    setIsItemAdded(true);
  };

  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
    setIsItemAdded(false);
  };
  return (
    <li className="restaurant-menu-item">
      <p className="restaurant-menu-name">{item.name}</p>
      <hr />
      <div className="restaurant-menu-divider">
        <div>
          {item?.attributes?.vegClassifier === "NONVEG" ? (
            <div className="menu-type-container">
              <img src={nonVegIcon} className="menu-type" alt="" />
              <span>Non Veg</span>
            </div>
          ) : (
            <div className="menu-type-container">
              <img src={vegIcon} className="menu-type" alt="" />
              <span>Veg</span>
            </div>
          )}
          {item?.cloudinaryImageId ? (
            <img
              src={`${IMG_CDN_URL}${item?.cloudinaryImageId}`}
              alt=""
              className="menu-img"
            />
          ) : (
            <img
              src="https://via.placeholder.com/200X150?text=Image+not+available"
              alt=""
              className="menu-img"
            />
          )}
          {item?.description && <p>{item?.description}</p>}
        </div>
        <div>
          <p className="restaurant-menu-price">Rs.{item.price / 100}</p>
          {!isItemAdded ? (
            <button className="btn btn-v2" onClick={() => addFoodItem(item)}>
              Add Item
            </button>
          ) : (
            <>
              <button
                className="btn btn-v3"
                onClick={() => removeFoodItem(item)}
              >
                Remove Item
              </button>
              <QuantityItem
                handleInc={handleInc}
                handleDec={handleDec}
                count={count}
              />
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default RestaurantMenuCard;
