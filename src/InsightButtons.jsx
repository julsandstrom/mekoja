import React from "react";

const InsightButtons = ({ handleShareGuidance, showInsights }) => {
  return (
    <div className="insight-section">
      {" "}
      <div className="insight-buttons-container">
        Receive guidance from someone who shares your values
        <button className="insight-buttons" onClick={showInsights}>
          <img
            className="message-square-icon"
            src="src\assets\icons\messages-square.svg"
            alt="share message icon"
          />
        </button>
      </div>
      <div className="insight-buttons-container">
        Leave a guiding thought
        <button className="insight-buttons" onClick={handleShareGuidance}>
          <img
            className="message-square-icon"
            src="src\assets\icons\message-square-share.svg"
            alt="message icon"
          />
        </button>
      </div>
    </div>
  );
};

export default InsightButtons;
