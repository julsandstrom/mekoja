import { buttons, iconMap } from "./data";
import Button from "./Button";
const ButtonOptions = ({ handleSelection, selectedButton }) => {
  return (
    <section className="button-section">
      {buttons.map((btn) => {
        const iconPath = iconMap[btn.name];
        return (
          <Button
            key={btn.id}
            id={btn.id}
            label={btn.name}
            iconPath={iconPath}
            action={handleSelection}
            gradient={btn.gradient}
            className={selectedButton.includes(btn.id) ? "button-selected" : ""}
          />
        );
      })}
    </section>
  );
};

export default ButtonOptions;
