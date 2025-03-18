import { buttons, iconMap } from "../data";
import Button from "../Button";

const GridBoxInfluence = ({
  gridThird,
  selectedForPlacement,
  removeFromGrid,
  placedButtonSecond,
  handlePlaceInGrid,
}) => {
  return (
    <div className="button-grid-box">
      {gridThird.map((buttonId, index) => {
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
                  extraArg={"influence"}
                />
              </>
            ) : (
              <>
                {placedButtonSecond.length >= 3 ? (
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
                    onClick={() => handlePlaceInGrid("influence", index)}
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
  );
};

export default GridBoxInfluence;
