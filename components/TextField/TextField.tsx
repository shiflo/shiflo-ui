import type { FocusEvent } from "react";
import { useState } from "react";

import { StyledTextField, Input, StartIcon, EndIcon } from "@components/TextField/TextField.styles";

import type { TextFieldProps } from "@components/TextField/TextField.typing";

function TextField({
  variant = "outlined",
  size = "medium",
  fullWidth,
  disabled,
  startIcon,
  endIcon,
  onFocus,
  onBlur,
  css,
  ...props
}: TextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);

    onFocus?.(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);

    onBlur?.(e);
  };

  return (
    <StyledTextField
      variant={variant}
      size={size}
      focused={isFocused}
      fullWidth={fullWidth}
      disabled={disabled}
      css={css}
    >
      {startIcon && <StartIcon>{startIcon}</StartIcon>}
      <Input {...props} onFocus={handleFocus} onBlur={handleBlur} disabled={disabled} />
      {endIcon && <EndIcon>{endIcon}</EndIcon>}
    </StyledTextField>
  );
}

export default TextField;
