import React from "react";

const Index = (props) => {
  const {
    type = "text",
    disabled = false,
    placeholder = "",
    name = "input",
    minLength = 5,
    maxLength = 25,
    required = true,
    color = "black",
    fontSize = 16,
    fontFamily = '"Times New Roman", Times, serif',
    align = "middle",
    id = "input-id",
    className = "abc",
    size = 15,
    title = "Input Field",
    multiple = false,
    step = "3",
    pattern = "[A-Za-z]{3}",
    background = "red",
    action = function (value) {
      console.log("Input", value);
    },
  } = props;
  return (
    <React.Fragment>
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        name={name}
        pattern={pattern}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        step={type === "number" ? step : 1}
        id={id}
        title={title}
        multiple={type === "file" ? multiple : false}
        size={size}
        className={className}
        style={{
          color: color,
          fontSize: fontSize,
          fontFamily: fontFamily,
          background: background,
        }}
        align={align}
        onChange={(e) => {
          action(e.target.value);
        }}
      />
    </React.Fragment>
  );
};

export default Index;
