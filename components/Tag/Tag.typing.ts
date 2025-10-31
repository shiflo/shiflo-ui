import type { ShifloTheme } from "@theme/typing";

import type { RecursionPath, UtilityProps } from "@typings/utility";
import type { HTMLMotionProps } from "motion/react";

export interface TagProps extends HTMLMotionProps<"span">, Pick<UtilityProps, "css"> {
  color?: RecursionPath<ShifloTheme["palette"]> | "inherit";
  textColor?: RecursionPath<ShifloTheme["palette"]> | "inherit";
}
