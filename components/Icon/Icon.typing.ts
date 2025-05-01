import { ComponentPropsWithRef } from "react";

import { RecursionPath, UtilityProps } from "@typings/utility";

import type * as Svgs from "@assets/icons";

import type { BasicTheme } from "basic-styled";

export interface BaseIconProps extends Pick<UtilityProps, "css"> {
  name: keyof typeof Svgs;
  color?: RecursionPath<BasicTheme["palette"]> | "inherit";
  width?: number;
  height?: number;
}

export type IconProps = BaseIconProps &
  Omit<ComponentPropsWithRef<"svg">, "children" | "width" | "height">;
