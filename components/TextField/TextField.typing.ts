import { ReactNode } from "react";

import { HTMLMotionProps } from "motion/react";

export interface TextFieldProps extends Omit<HTMLMotionProps<"input">, "size"> {
  variant?: "contained" | "outlined";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
}
