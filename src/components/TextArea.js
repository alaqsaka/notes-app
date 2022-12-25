import React from "react";

const TextArea = ({ placeholder, value, onChange, required }) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default TextArea;
