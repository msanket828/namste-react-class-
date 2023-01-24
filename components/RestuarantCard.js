/* ----------------------------- RestaurantCard ----------------------------- */
import IMG_CDN_URL from "../constants";
const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div>
      <img
        src={`${IMG_CDN_URL}${cloudinaryImageId}`}
        alt="javascript:void(0);"
      />
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

export default RestaurantCard;
