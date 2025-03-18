import React from "react";

const ReflectionInfluence = ({ influenceCount }) => {
  return (
    <div className="second-section-title-wrap">
      <div className="reflections-title-container">
        <h2 className="second-section-title">What I</h2>
        <span className="reflections-pop">influence</span>
      </div>
      <progress value={influenceCount} max={3} className="progress-main">
        2
      </progress>
    </div>
  );
};

export default ReflectionInfluence;
