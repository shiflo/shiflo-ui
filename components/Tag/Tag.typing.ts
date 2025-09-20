import { HTMLMotionProps } from "motion/react";

export interface TagProps extends HTMLMotionProps<"span"> {
  color?: "primary" | "warning" | "error" | "info" | "success";
}
