import { buttons, iconMap } from "../data";
import Button from "../Button";
import check from "../assets/icons/check.svg";
const GridBoxForward = ({
  gridSecond,
  selectedForPlacement,
  removeFromGrid,
  placedButtonsFirst,
  handlePlaceInGrid,
}) => {
  return (
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
                      src={check}
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
    </div>
  );
};

export default GridBoxForward;
