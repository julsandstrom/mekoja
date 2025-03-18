import React from "react";

const DownArrow = ({ handleScrollToNext, clickJumpAnimation }) => {
  return (
    <div onClick={handleScrollToNext} className="down-arrow-container">
      {" "}
      <img
        src="src\assets\arrow-down.svg"
        className={clickJumpAnimation ? "down-arrow" : "down-stop"}
      />
    </div>
  );
};

export default DownArrow;
