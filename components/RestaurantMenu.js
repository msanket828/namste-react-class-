import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IMG_CDN_URL from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=19.0998095&lng=72.9993223&menuId=${resId}`
    );
    const json = await data.json();
    setRestaurant(json?.data);
  }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="wrapper">
        <div className="restaurant-menu__info">
          <h2 className="restaurant-menu__name">{restaurant.name}</h2>
          <img src={`${IMG_CDN_URL}${restaurant.cloudinaryImageId}`} />
          <h3 className="restaurant-menu__area">{restaurant.area}</h3>
          <h3 className="restaurant-menu__city">{restaurant.city}</h3>
          <h3 className="rstaurant-menu__rating">
            {restaurant.avgRating} stars
          </h3>
          <h3 className="restaurant-menu__costfortwo">
            {restaurant.costForTwoMsg}
          </h3>
        </div>
        <div className="restaurant-menu__menudetail">
          <ul>
            {Object.values(restaurant.menu.items).map((item) => {
              return (
                <li className="restaurant-menu-item" key={item.id}>
                  <p className="restaurant-menu-name">{item.name}</p>
                  {item?.cloudinaryImageId && (
                    <img
                      src={`${IMG_CDN_URL}${item?.cloudinaryImageId}`}
                      alt=""
                    />
                  )}
                  <p></p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
