import { ReactNode, ElementType } from "react";

import { PolymorphicComponentProps } from "@typings/component";
import { UtilityProps, RecursionPath } from "@typings/utility";

import type { BasicTheme } from "basic-styled";

export interface BaseTypographyProps extends UtilityProps {
  variant?: keyof BasicTheme["typography"];
  fontWeight?: 400 | 500 | 700;
  color?: RecursionPath<BasicTheme["palette"]> | "inherit";
  borderColor?: RecursionPath<BasicTheme["palette"]>;
  textAlign?: "left" | "center" | "right";
  noWrap?: boolean;
  lineClamp?: number;
}

export type TypographyProps<T extends ElementType> = BaseTypographyProps &
  PolymorphicComponentProps<T>;

export type TypographyComponent<DT extends ElementType = "div"> = <T extends ElementType = DT>(
  props: TypographyProps<T>
) => ReactNode;
