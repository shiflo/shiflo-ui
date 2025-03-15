import { ComponentPropsWithRef } from "react";

import { RecursionPath, UtilityProps } from "@typings/utility";

import type { BasicTheme } from "basic-styled";

export interface BoxProps extends ComponentPropsWithRef<"div">, UtilityProps {
  backgroundColor?: RecursionPath<BasicTheme["palette"]>;
  color?: RecursionPath<BasicTheme["palette"]> | "inherit";
  borderColor?: RecursionPath<BasicTheme["palette"]>;
}
