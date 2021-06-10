import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const sizeArr = ["xs", "sm", "md", "lg", "xlg"];
const colorArr = ["primary", "secondary", "success", "danger", "info"];

function Button({
  label,
  onClick,
  tooltip,
  size,
  color,
  onLongPress,
  disabled,
}) {
  console.log({ disabled, size });

  onClick = () => {
    console.log({ disabled, size, color });
  };

  const checkButtonSize = sizeArr.includes(size) ? size : "";
  const checkButtonStyle = colorArr.includes(color) ? color : "";
  return (
    <div>
      <button
        onClick={onClick}
        title={tooltip}
        disabled={!!disabled}
        className={`${checkButtonSize} ${checkButtonStyle}`}
      >
        {label}
      </button>
    </div>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xlg"]),
  color: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
  tooltip: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onLongPress: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  size: "md",
};

export default Button;
