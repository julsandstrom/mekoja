import React from "react";

const ReflectionGrounded = ({ groundedCount }) => {
  return (
    <div id="next-section" className="second-section-title-wrap">
      <div className="reflections-title-container">
        <h2 className="second-section-title">What keeps me </h2>
        <span className="reflections-pop">grounded</span>
      </div>
      <progress value={groundedCount} max={3} className="progress-main">
        2
      </progress>
    </div>
  );
};

export default ReflectionGrounded;
