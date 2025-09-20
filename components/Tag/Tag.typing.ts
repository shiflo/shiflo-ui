import type { UtilityProps } from "@typings/utility";
import type { HTMLMotionProps } from "motion/react";

export interface TagProps extends HTMLMotionProps<"span">, Pick<UtilityProps, "css"> {
  color?: "primary" | "warning" | "error" | "info" | "success";
}
