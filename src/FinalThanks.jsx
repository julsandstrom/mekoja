import React from "react";

const FinalThanks = ({ setFinalThanks }) => {
  return (
    <div className="final-thanks" onClick={() => setFinalThanks(false)}>
      {" "}
      <h2 className="thanks-text-1">
        A message for someone who sees the world like you do.{" "}
      </h2>
      <h2 className="thanks-text">Thank you!</h2>
    </div>
  );
};

export default FinalThanks;
