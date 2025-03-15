import { ComponentPropsWithRef } from "react";

import { UtilityProps, RecursionPath } from "@typings/utility";

import type { BasicTheme } from "basic-styled";

export interface TypographyProps extends ComponentPropsWithRef<"div">, UtilityProps {
  variant?: keyof BasicTheme["typography"];
  fontWeight?: 400 | 500 | 700;
  color?: RecursionPath<BasicTheme["palette"]> | "inherit";
  borderColor?: RecursionPath<BasicTheme["palette"]>;
  textAlign?: "left" | "center" | "right";
  noWrap?: boolean;
  lineClamp?: number;
}
