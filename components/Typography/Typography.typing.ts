import { HTMLAttributes } from "react";

import { ComponentProps, RecursionPath } from "@typings/utility";

import type { BasicTheme } from "basic-styled";

export interface TypographyProps extends HTMLAttributes<HTMLDivElement>, ComponentProps {
  variant?: keyof BasicTheme["typography"];
  fontWeight?: 400 | 500 | 700;
  color?: RecursionPath<BasicTheme["palette"]> | "inherit";
  textAlign?: "left" | "center" | "right";
  noWrap?: boolean;
  lineClamp?: number;
}
