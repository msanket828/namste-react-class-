import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";

/* -------------------------------- main-body ------------------------------- */
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getRestaurantList();
  }, []);

  async function getRestaurantList() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0998095&lng=72.9993223&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json.data.cards[2].data.data.cards);
    setFilteredRestaurants(json.data.cards[2].data.data.cards);
  }

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    const filterData = allRestaurants.filter((restaurant) => {
      return restaurant.data.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setFilteredRestaurants(filterData);
  };

  //render allRestaurants
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main-body">
      <div className="wrapper">
        <div className="search-container">
          <input
            className="input-v1"
            type="text"
            name=""
            id=""
            placeholder="Search"
            value={searchText}
            onChange={handleSearch}
          />
          <button
            type="button"
            role="button"
            className="btn btn-v1"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
      </div>
      <div className="wrapper">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant.data.id}`}
            key={restaurant.data.id}
            className="card"
          >
            <RestaurantCard {...restaurant.data} />
          </Link>
        ))}
        {filteredRestaurants.length === 0 && allRestaurants.length > 0 && (
          <h1>No result found...</h1>
        )}
      </div>
    </div>
  );
};

export default Body;
