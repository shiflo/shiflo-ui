import type { MouseEvent } from "react";

import { StyledSwitch, StyledSwitchThumb } from "@components/Switch/Switch.styles";

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
      onClick={handleClick}
      layout
      style={{
        justifyContent: checked ? "flex-end" : "flex-start"
      }}
      {...props}
    >
      <StyledSwitchThumb layout size={size} />
    </StyledSwitch>
  );
}

export default Switch;
