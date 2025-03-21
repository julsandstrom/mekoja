import React from "react";

const Button = ({
  label,
  action,
  id,
  className,
  gradient,
  iconPath,
  extraArg,
}) => {
  return (
    <button
      className={`button ${className}`}
      onClick={() => action(id, extraArg)}
      style={{ background: gradient }}
    >
      {iconPath && <img src={iconPath} alt={label} className="icon" />}
      <span className="button-label">{label}</span>
    </button>
  );
};
export default Button;
