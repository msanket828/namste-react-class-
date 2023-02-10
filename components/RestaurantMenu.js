import { useParams } from "react-router-dom";
import IMG_CDN_URL from "../constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCard from "./RestaurantMenuCard";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  //created custom hook
  const restaurantMenu = useRestaurantMenu(resId);

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="wrapper">
        <div className="restaurant-menu__info">
          <h2 className="restaurant-menu__name">{restaurantMenu.name}</h2>
          <img src={`${IMG_CDN_URL}${restaurantMenu.cloudinaryImageId}`} />
          <h3 className="restaurant-menu__area">{restaurantMenu.area}</h3>
          <h3 className="restaurant-menu__city">{restaurantMenu.city}</h3>
          <h3 className="rstaurant-menu__rating">
            {restaurantMenu.avgRating} stars
          </h3>
          <h3 className="restaurant-menu__costfortwo">
            {restaurantMenu.costForTwoMsg}
          </h3>
        </div>
        <div className="restaurant-menu__menudetail">
          <ul>
            {Object.values(restaurantMenu.menu.items).map((item) => {
              return <RestaurantMenuCard item={item} key={item.id} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
