import React from "react";

const ShareGuidance = ({ guidance, closeShareModal }) => {
  return (
    <div className="share-guidance-modal">
      <p className="share-title">
        A reflection for someone walking a similar path.
      </p>
      <span>Leave a message:</span>
      <select>
        {guidance.map((item) => (
          <option key={item.id}>{item.message}</option>
        ))}
      </select>
      <button className="save-guidance-button" onClick={closeShareModal}>
        save
      </button>
    </div>
  );
};

export default ShareGuidance;
