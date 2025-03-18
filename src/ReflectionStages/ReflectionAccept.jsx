import React from "react";

const ReflectionAccept = ({ acceptCount }) => {
  return (
    <div className="second-section-title-wrap-2">
      <div className="reflections-title-container">
        <h2 className="second-section-title">Things I need to</h2>
        <span className="reflections-pop">accept</span>
      </div>
      <progress value={acceptCount} max={3} className="progress-main">
        2
      </progress>
    </div>
  );
};

export default ReflectionAccept;
