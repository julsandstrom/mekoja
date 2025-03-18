import React from "react";
import squareMessage from "./assets/icons/messages-square.svg";
import messageSquare from "./assets/icons/message-square-share.svg";
const InsightButtons = ({ handleShareGuidance, showInsights }) => {
  return (
    <div className="insight-section">
      {" "}
      <div className="insight-buttons-container">
        Receive guidance from someone who shares your values
        <button className="insight-buttons" onClick={showInsights}>
          <img
            className="message-square-icon"
            src={squareMessage}
            alt="share message icon"
          />
        </button>
      </div>
      <div className="insight-buttons-container">
        Leave a guiding thought
        <button className="insight-buttons" onClick={handleShareGuidance}>
          <img
            className="message-square-icon"
            src={messageSquare}
            alt="message icon"
          />
        </button>
      </div>
    </div>
  );
};

export default InsightButtons;
