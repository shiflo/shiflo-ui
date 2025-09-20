import { ComponentPropsWithRef } from "react";

import { RecursionPath } from "@typings/utility";

import type * as Svgs from "@assets/icons";

import type { ShifloTheme } from "@theme/typing";

export interface BaseIconProps {
  name: keyof typeof Svgs;
  color?: RecursionPath<ShifloTheme["palette"]> | "inherit";
  width?: number;
  height?: number;
}

export type IconProps = BaseIconProps &
  Omit<ComponentPropsWithRef<"svg">, "children" | "width" | "height">;
