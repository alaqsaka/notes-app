import React from "react";

const TextField = ({ type, placeholder, value, onChange, required }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={onChange}
    />
  );
};

export default TextField;
