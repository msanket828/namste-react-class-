import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCount, subCount } from "../utils/cartSlice";

const QuantityItem = (props) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount(props.cartItem.itemScore);
  }, [props.cartItem.itemScore]);
  const dispatch = useDispatch();
  const handleInc = (cartItem) => {
    setCount((prevCount) => prevCount + 1);
    dispatch(addCount({ ...cartItem, itemScore: count + 1 }));
  };
  const handleDec = (cartItem) => {
    if (count < 2) {
      setCount(count);
    } else {
      setCount((prevCount) => prevCount - 1);
      dispatch(subCount({ ...cartItem, itemScore: count - 1 }));
    }
  };
  return (
    <div className="qty-container">
      <span className="qty-btn sub" onClick={() => handleDec(props.cartItem)}>
        -
      </span>
      <p className="qty-count">{count}</p>
      <span className="qty-btn add" onClick={() => handleInc(props.cartItem)}>
        +
      </span>
    </div>
  );
};

export default QuantityItem;
