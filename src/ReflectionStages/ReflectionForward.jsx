import React from "react";

const ReflectionForward = ({ forwardCount }) => {
  return (
    <div className="second-section-title-wrap-2">
      <div className="reflections-title-container">
        <h2 className="second-section-title">What pushes me </h2>
        <span className="reflections-pop">forward</span>
      </div>

      <progress value={forwardCount} max={3} className="progress-main">
        2
      </progress>
    </div>
  );
};

export default ReflectionForward;
