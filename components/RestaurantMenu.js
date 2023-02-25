import { useParams } from "react-router-dom";
import IMG_CDN_URL from "../constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCard from "./RestaurantMenuCard";
import Shimmer from "./Shimmer";
import { FcHome } from "react-icons/fc";
import { BsStarFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

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
          <h2 className="restaurant-menu__name">
            <FcHome className="icon-lg icon-home" />
            <span>{restaurantMenu.name}</span>
          </h2>
          <img
            src={`${IMG_CDN_URL}${restaurantMenu.cloudinaryImageId}`}
            className="image"
          />
          <h3 className="restaurant-menu__area">
            <HiLocationMarker className="icon-sm icon-red" />
            <span>
              {restaurantMenu.area}, {restaurantMenu.city}
            </span>
          </h3>
          {/* <h3 className="restaurant-menu__city"></h3> */}
          <h3 className="retaurant-menu__rating">
            <BsStarFill className="icon-sm" />
            <span>{restaurantMenu.avgRating}</span>
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
