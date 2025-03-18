import React from "react";

const AlreadyReadMessage = ({ setAlreadyReadMessage }) => {
  return (
    <div
      className="modal-already-read"
      onClick={() => setAlreadyReadMessage(false)}
    >
      This message has already been read. <br />
      New reflections bring new wisdom.
    </div>
  );
};

export default AlreadyReadMessage;
