import { forwardRef } from "react";

import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.typing";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, variant = "filled", size = "medium", color = "primary", ...props },
  ref
) {
  if (variant === "ghost") {
    return (
      <StyledButton ref={ref} variant={variant} color={"primary"} {...props}>
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton ref={ref} variant={variant} size={size} color={color} {...props}>
      {children}
    </StyledButton>
  );
});

export default Button;
