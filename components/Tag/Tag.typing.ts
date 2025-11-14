import type { ComponentPropsWithRef } from "react";

import type { ShifloTheme } from "@theme/typing";

import type { RecursionPath, UtilityProps } from "@typings/utility";

export interface TagProps extends ComponentPropsWithRef<"span">, Pick<UtilityProps, "css"> {
  color?: RecursionPath<ShifloTheme["palette"]> | "inherit";
  textColor?: RecursionPath<ShifloTheme["palette"]> | "inherit";
}
