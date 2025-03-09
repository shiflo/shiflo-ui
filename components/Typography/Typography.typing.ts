import { HTMLAttributes } from "react";

import { UtilityProps, ComponentProps, RecursionPath } from "@typings/utility";

import type { BasicTheme } from "basic-styled";

export interface TypographyProps
  extends HTMLAttributes<HTMLDivElement>,
    ComponentProps,
    UtilityProps {
  variant?: keyof BasicTheme["typography"];
  fontWeight?: 400 | 500 | 700;
  color?: RecursionPath<BasicTheme["palette"]> | "inherit";
  borderColor?: RecursionPath<BasicTheme["palette"]>;
  textAlign?: "left" | "center" | "right";
  noWrap?: boolean;
  lineClamp?: number;
}
