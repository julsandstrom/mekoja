import React from "react";

const ReflectionWorld = ({ worldCount }) => {
  return (
    <div className="second-section-title-wrap">
      <div className="reflections-title-container">
        <h2 className="second-section-title-world">The world </h2>

        <h2 className="second-section-title">
          {" "}
          <span className="reflections-pop-expects">expects </span>
          from me
        </h2>
      </div>
      <progress value={worldCount} max={3} className="progress-main">
        2
      </progress>
    </div>
  );
};

export default ReflectionWorld;
