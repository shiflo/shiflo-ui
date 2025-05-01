import { ComponentPropsWithRef, ReactNode } from "react";

export interface TextFieldProps extends Omit<ComponentPropsWithRef<"input">, "children" | "size"> {
  variant?: "contained" | "outlined";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
}
