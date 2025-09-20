import { MouseEvent } from "react";

import { HTMLMotionProps } from "motion/react";

export interface SwitchProps extends Omit<HTMLMotionProps<"button">, "onChange"> {
  checked?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onChange?: (event: MouseEvent<HTMLButtonElement>, checked: boolean) => void;
}
