import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FETCH_MENU_URL } from "../constants";

const useRestaurantMenu = (resId) => {
  const items = useSelector((store) => store.cart.items);
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(`${FETCH_MENU_URL}${resId}`);
    const json = await data?.json();

    const oldItems = await new Set(items.map(({ id }) => id));
    const combined = await Object.values(json?.data?.menu?.items).filter(
      ({ id }) => !oldItems.has(id)
    );
    json["data"]["menu"]["items"] = await combined;
    setRestaurant(json.data);
  }
  return restaurant;
};
export default useRestaurantMenu;
