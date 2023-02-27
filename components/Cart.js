import { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import CartItemsTotal from "./CartItemsTotal";
import RestaurantMenuCard from "./RestaurantMenuCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-body">
      <div className="cart-wrapper">
        {cartItems.length <= 0 ? (
          <h2>No items in your cart</h2>
        ) : (
          <div className="cart-page-divider">
            <CartItems cartItems={cartItems} />
            <CartItemsTotal />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
