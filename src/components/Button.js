import React from "react";

const Button = ({ color, children, onClick, type }) => {
  let colors;

  switch (color) {
    case "red":
      colors =
        "button-action__base note-item__delete-button note-item__delete-button:hover ";
      break;
    case "yellow":
      colors =
        "button-action__base note-item__archive-button note-item__archive-button:hover ";
      break;
    default:
      colors = "button__base";
  }

  return (
    <button type={type ? type : ""} className={colors} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
