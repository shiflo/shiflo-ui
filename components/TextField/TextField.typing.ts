import { ComponentPropsWithRef, ReactNode } from "react";

import { UtilityProps } from "@typings/utility";

export interface TextFieldProps
  extends Omit<ComponentPropsWithRef<"input">, "children" | "size">,
    Pick<UtilityProps, "css"> {
  variant?: "contained" | "outlined";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
}
