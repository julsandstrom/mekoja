import React from "react";

const ReflectionMyself = ({ myselfCount }) => {
  return (
    <div className="second-section-title-wrap-2">
      <div className="reflections-title-container">
        <h2 className="second-section-title">What I need for</h2>{" "}
        <span className="reflections-pop">myself</span>
      </div>
      <progress value={myselfCount} max={3} className="progress-main">
        2
      </progress>
    </div>
  );
};

export default ReflectionMyself;
