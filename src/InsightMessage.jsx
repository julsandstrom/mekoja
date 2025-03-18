import useStore from "./useStore.js";

const InsightMessage = ({ selectedGuidance, closeGuidance }) => {
  const { isFadingOut } = useStore();
  return (
    <>
      <div className={`modal-insights ${isFadingOut ? "fade-out" : ""}`}>
        <h5 className="insight-message">"{selectedGuidance.message}"</h5>{" "}
        <div className="modal-container-text">
          <div className="date-message-wrap">
            <span className="date-text">
              <span className="message-small">added:</span>{" "}
              {selectedGuidance.date}
            </span>{" "}
            <span className="date-bold">
              This message disappears after reading.
            </span>{" "}
          </div>
          <button className="close-modal" onClick={closeGuidance}>
            close
          </button>{" "}
        </div>
      </div>
    </>
  );
};

export default InsightMessage;
