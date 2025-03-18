import { buttons, iconMap } from "../data";
import Button from "../Button";
import check from "../assets/icons/check.svg";
const GridBoxMyself = ({
  gridSixth,
  selectedForPlacement,
  removeFromGrid,
  placedButtonThird,
  handlePlaceInGrid,
}) => {
  return (
    <div className="button-grid-box-2">
      {gridSixth.map((buttonId, index) => {
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
                  extraArg={"myself"}
                />
              </div>
            ) : (
              <>
                {placedButtonThird.length >= 3 ? (
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
                    onClick={() => handlePlaceInGrid("myself", index)}
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

export default GridBoxMyself;
