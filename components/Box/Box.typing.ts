import { HTMLAttributes } from "react";

import { RecursionPath, UtilityProps } from "@typings/utility";

import type { BasicTheme } from "basic-styled";

export interface BoxProps extends HTMLAttributes<HTMLDivElement>, UtilityProps {
  backgroundColor?: RecursionPath<BasicTheme["palette"]>;
  color?: RecursionPath<BasicTheme["palette"]> | "inherit";
  borderColor?: RecursionPath<BasicTheme["palette"]>;
}
