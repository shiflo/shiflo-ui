import { StyledButton } from "./Button.styles";

import type { ButtonProps } from "./Button.typing";

function Button({
  ref,
  children,
  variant = "filled",
  size = "medium",
  color = "primary",
  startIcon,
  endIcon,
  ...props
}: ButtonProps) {
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

  if (variant === "gradient") {
    return (
      <StyledButton ref={ref} variant={"gradient"} size={size} color={"primary"} {...props}>
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
}

export default Button;
