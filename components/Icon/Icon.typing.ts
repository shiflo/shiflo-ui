import type { ComponentPropsWithRef } from "react";

import type * as Svgs from "@assets/icons";

import type { ShifloTheme } from "@theme/typing";
import type { RecursionPath, UtilityProps } from "@typings/utility";

export interface BaseIconProps extends Pick<UtilityProps, "css"> {
  name: keyof typeof Svgs;
  color?: RecursionPath<ShifloTheme["palette"]> | "inherit";
  width?: number;
  height?: number;
}

export type IconProps = BaseIconProps &
  Omit<ComponentPropsWithRef<"svg">, "children" | "width" | "height">;
