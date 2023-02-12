import { useDispatch, useSelector } from "react-redux";
import { clearAllItems } from "../utils/cartSlice";

const CartItemsTotal = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const calculateItemsTotal = cartItems.reduce((prev, curr) => {
    return prev + curr.price / 100;
  }, 0);

  console.log(cartItems);
  return (
    <>
      <div className="cart-items-total">
        <div className="clear-cart-container">
          <button
            className="btn btn-v3"
            onClick={() => dispatch(clearAllItems())}
          >
            Clear Cart
          </button>
        </div>
        <h2 className="title">Item with amount</h2>
        <hr />
        <ul>
          {cartItems.map((cartItem) => {
            return (
              <li key={cartItem.id}>
                <h2>{cartItem.name}</h2>
                <p>Rs. {cartItem.price / 100}</p>
              </li>
            );
          })}
          <li>
            <h2>Grand Total</h2>
            <p>Rs. {calculateItemsTotal}</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CartItemsTotal;
