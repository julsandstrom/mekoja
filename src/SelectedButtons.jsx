import { buttons, iconMap } from "./data";
import Button from "./Button";
const SelectedButtons = ({
  selectedButton,
  handleSelectForPlacement,
  selectedForPlacement,
}) => {
  return (
    <div className="user-modal-buttons">
      {selectedButton.map((id) => {
        const btn = buttons.find((button) => button.id === id);
        const iconPath = iconMap[btn.name];
        return btn ? (
          <div>
            <p className="tap-info">Tap to select</p>
            <Button
              key={btn.id}
              id={btn.id}
              iconPath={iconPath}
              label={btn.name}
              action={() => handleSelectForPlacement(btn.id)}
              gradient={btn.gradient}
              className={`second-buttons ${
                selectedForPlacement === btn.id ? "button-selected-modal" : ""
              }`}
            />
          </div>
        ) : null;
      })}
    </div>
  );
};

export default SelectedButtons;
