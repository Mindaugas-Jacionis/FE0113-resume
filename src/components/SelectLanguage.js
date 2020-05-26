import React from "react";

function SelectLanguage({ onChange }) {
  return (
    <select onChange={onChange}>
      <option value="en">English</option>
      <option value="lt">Lietuviškai</option>
    </select>
  );
}

export default SelectLanguage;
