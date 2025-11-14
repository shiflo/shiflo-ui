import type { MouseEvent } from "react";

import { StyledSwitch } from "@components/Switch/Switch.styles";

import type { SwitchProps } from "@components/Switch/Switch.typing";

function Switch({
  checked = false,
  disabled = false,
  size = "medium",
  onChange,
  onClick,
  ...props
}: SwitchProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!disabled && typeof onChange === "function") {
      onChange(e, !checked);
    }

    if (typeof onClick === "function") {
      onClick(e);
    }
  };

  return (
    <StyledSwitch
      size={size}
      checked={checked}
      disabled={disabled}
      ease={checked ? "in" : "out"}
      onClick={handleClick}
      {...props}
    />
  );
}

export default Switch;
