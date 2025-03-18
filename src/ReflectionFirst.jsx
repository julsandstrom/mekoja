import useStore from "./useStore.js";
import { buttons, iconMap } from "./data.jsx";
import Button from "./Button.jsx";
const ReflectionFirst = ({ handlePlaceInGrid }) => {
  const {
    groundedCount,
    gridFirst,
    selectedForPlacement,
    removeFromGrid,
    placedButtonsFirst,

    gridSecond,
    forwardCount,
  } = useStore();

  return (
    <div className="grid-reflection-1">
      <div className="second-section-title-wrap">
        <div className="reflections-title-container">
          <h2 className="second-section-title">What keeps me </h2>
          <span className="reflections-pop">grounded</span>
        </div>
        <progress value={groundedCount} max={3} className="progress-main">
          2
        </progress>
      </div>
      <div className="button-grid-box">
        {gridFirst.map((buttonId, index) => {
          const btn = buttons.find((b) => b.id === buttonId);
          const iconPath = iconMap[btn?.name];
          return (
            <div
              key={index}
              className={`grid-slot ${
                selectedForPlacement ? "second-button-selected" : ""
              }`}
            >
              {btn ? (
                <>
                  <Button
                    id={index}
                    label={btn.name}
                    iconPath={iconPath}
                    gradient={btn.gradient}
                    action={removeFromGrid}
                    extraArg={"grounded"}
                  />
                </>
              ) : (
                <>
                  {placedButtonsFirst.length >= 3 ? (
                    <button className="drop-box-text">
                      <img
                        src="src\assets\icons\check.svg"
                        alt="check icon"
                        style={{ filter: "invert(1)" }}
                      />
                    </button>
                  ) : (
                    <button
                      className="drop-box"
                      onClick={() => handlePlaceInGrid("grounded", index)}
                    >
                      +
                    </button>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
      {/* ----------------------------------------------------  */}
      <div className="second-section-title-wrap-2">
        <div className="reflections-title-container">
          <h2 className="second-section-title">What pushes me </h2>
          <span className="reflections-pop">forward</span>
        </div>

        <progress value={forwardCount} max={3} className="progress-main">
          2
        </progress>
      </div>
      <div className="button-grid-box-2">
        {gridSecond.map((buttonId, index) => {
          const btn = buttons.find((b) => b.id === buttonId);
          const iconPath = iconMap[btn?.name];
          return (
            <div
              key={index}
              className={`grid-slot ${
                selectedForPlacement ? "second-button-selected" : ""
              }`}
            >
              {btn ? (
                <div className="dropped-button">
                  <Button
                    id={index}
                    label={btn.name}
                    iconPath={iconPath}
                    gradient={btn.gradient}
                    action={removeFromGrid}
                    extraArg={"forward"}
                  />
                </div>
              ) : (
                <>
                  {placedButtonsFirst.length >= 3 ? (
                    <button className="drop-box-text">
                      <img
                        src="src\assets\icons\check.svg"
                        alt="check icon"
                        style={{ filter: "invert(1)" }}
                      />
                    </button>
                  ) : (
                    <button
                      className="drop-box"
                      onClick={() => handlePlaceInGrid("forward", index)}
                    >
                      +
                    </button>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>{" "}
      {placedButtonsFirst.length >= 3 ? (
        <p className="section-status-1">
          All values placed. Ready to continue?
        </p>
      ) : (
        <p className="section-status-1">
          Placed: {placedButtonsFirst.length} out of 3
        </p>
      )}
    </div>
  );
};

export default ReflectionFirst;
