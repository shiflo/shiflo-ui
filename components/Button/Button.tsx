import { forwardRef } from "react";

import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.typing";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    variant = "filled",
    size = "medium",
    color = "primary",
    startIcon,
    endIcon,
    ...props
  },
  ref
) {
  if (variant === "text") {
    return (
      <StyledButton ref={ref} variant={"text"} size={size} color={"secondary"} {...props}>
        {startIcon}
        {children}
        {endIcon}
      </StyledButton>
    );
  }

  if (variant === "ghost") {
    return (
      <StyledButton ref={ref} variant={"ghost"} size={size} color={"primary"} {...props}>
        {startIcon}
        {children}
        {endIcon}
      </StyledButton>
    );
  }

  return (
    <StyledButton ref={ref} variant={variant} size={size} color={color} {...props}>
      {startIcon}
      {children}
      {endIcon}
    </StyledButton>
  );
});

export default Button;
