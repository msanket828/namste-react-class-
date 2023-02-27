import { useDispatch, useSelector } from "react-redux";
import { clearAllItems } from "../utils/cartSlice";
import { GrClearOption } from "react-icons/gr";

const CartItemsTotal = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const calculateItemsTotal = cartItems.reduce((prev, curr) => {
    return prev + (curr.price * curr.itemScore) / 100;
  }, 0);
  return (
    <>
      <div className="cart-items-total">
        <div className="clear-cart-container">
          <button
            className="badge badge-v1"
            onClick={() => dispatch(clearAllItems())}
          >
            <GrClearOption className="icon-xs" />
            <span>Cart</span>
          </button>
        </div>
        <h2 className="title">Item with amount</h2>
        <hr />
        <ul>
          {cartItems.map((cartItem) => {
            return (
              <li key={cartItem.id}>
                <h2>{cartItem.name}</h2>
                <h3>{cartItem.itemScore}</h3>
                <p>Rs. {(cartItem.price * cartItem.itemScore) / 100}</p>
              </li>
            );
          })}
          <li>
            <h2>Grand Total</h2>
            <p>Rs. {calculateItemsTotal.toFixed(2)}</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CartItemsTotal;
