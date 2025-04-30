import React from "react";

const FavoriteButton = ({
  isFavorite = false,
  onToggle,
  customClasses = "",
}) => {
  const handleClick = () => {
    if (typeof onToggle === "function") {
      onToggle(!isFavorite);
    }
  };

  const buttonClass = "btn text-danger border-0";

  return (
    <button
      type="button"
      className={`${buttonClass} ${customClasses}`}
      onClick={handleClick}
    >
      <i className={`bi ${isFavorite ? "bi-heart-fill" : "bi-heart"} fs-3`}></i>
    </button>
  );
};

export default FavoriteButton;
