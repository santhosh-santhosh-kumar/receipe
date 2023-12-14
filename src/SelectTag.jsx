import React from "react";
import Select from "react-select";

function SelectTag({ onchange, option, value }) {

  const defaultValue = (option, value) => {
    return option ? option.find((option) => option.value === value) : "";
  }

  return (
    <>
      <select
        value={defaultValue(option, value)}
        onChange={(value) => onchange(value)}
        option={option}
      ></select>
    </>
  );
}

export default SelectTag;
