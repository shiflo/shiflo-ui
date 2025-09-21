import { StyledButton } from "@components/Button/Button.styles";

import type { ButtonProps } from "@components/Button/Button.typing";

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
      <StyledButton
        ref={ref}
        variant={"text"}
        size={size}
        color={"secondary"}
        layout
        whileHover={{
          scale: 1.02
        }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          duration: 0.2,
          bounce: 0.2
        }}
        {...props}
      >
        {startIcon}
        {children}
        {endIcon}
      </StyledButton>
    );
  }

  if (variant === "ghost") {
    return (
      <StyledButton
        ref={ref}
        variant={"ghost"}
        size={size}
        color={"primary"}
        layout
        whileHover={{
          scale: 1.02
        }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          duration: 0.2,
          bounce: 0.2
        }}
        {...props}
      >
        {startIcon}
        {children}
        {endIcon}
      </StyledButton>
    );
  }

  if (variant === "gradient") {
    return (
      <StyledButton
        ref={ref}
        variant={"gradient"}
        size={size}
        color={"primary"}
        layout
        whileHover={{
          scale: 1.02
        }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          duration: 0.2,
          bounce: 0.2
        }}
        {...props}
      >
        {startIcon}
        {children}
        {endIcon}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      ref={ref}
      variant={variant}
      size={size}
      color={color}
      layout
      whileHover={{
        scale: 1.02
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        duration: 0.2,
        bounce: 0.2
      }}
      {...props}
    >
      {startIcon}
      {children}
      {endIcon}
    </StyledButton>
  );
}

export default Button;
