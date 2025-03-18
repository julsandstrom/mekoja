import { buttons, iconMap } from "../data";
import Button from "../Button";
import check from "../assets/icons/check.svg";
const GridBoxGrounded = ({
  gridFirst,
  selectedForPlacement,
  removeFromGrid,
  placedButtonsFirst,
  handlePlaceInGrid,
}) => {
  return (
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
                      src={check}
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
  );
};

export default GridBoxGrounded;
