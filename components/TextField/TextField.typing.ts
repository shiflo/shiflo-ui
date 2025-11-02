import type { ReactNode } from "react";

import type { UtilityProps } from "@typings/utility";
import type { HTMLMotionProps } from "motion/react";

export interface TextFieldProps
  extends Omit<HTMLMotionProps<"input">, "size">,
    Pick<UtilityProps, "css"> {
  variant?: "contained" | "outlined";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
}
