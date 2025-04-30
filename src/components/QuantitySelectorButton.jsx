import React from "react";

const QuantitySelectorButton = ({
  value,
  onIncrement,
  onDecrement,
  min = 0,
  max = 99,
}) => {
  return (
    <div className="input-group">
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={onDecrement}
        disabled={value <= min}
      >
        -
      </button>
      <span className="input-group-text">{value}</span>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={onIncrement}
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelectorButton;
