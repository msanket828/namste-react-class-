const QuantityItem = (props) => {
  return (
    <div className="qty-container">
      <span className="qty-btn add" onClick={() => props.handleInc()}>
        +
      </span>
      <p className="qty-count">{props?.count}</p>
      <span className="qty-btn sub" onClick={() => props.handleDec()}>
        -
      </span>
    </div>
  );
};

export default QuantityItem;
