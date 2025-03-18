import React from "react";

const AlreadySharedMessage = ({ setAlreadySharedGuidance }) => {
  return (
    <div
      className="modal-already-read"
      onClick={() => setAlreadySharedGuidance(false)}
    >
      You've already shared your wisdom.
      <br /> Thank you!
    </div>
  );
};

export default AlreadySharedMessage;
