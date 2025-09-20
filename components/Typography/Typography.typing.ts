import type { ReactNode, ElementType } from "react";

import type { ShifloTheme } from "@theme/typing";
import type { PolymorphicComponentProps } from "@typings/component";
import type { UtilityProps, RecursionPath } from "@typings/utility";

export interface BaseTypographyProps extends UtilityProps {
  variant?: keyof ShifloTheme["typography"];
  fontWeight?: 400 | 500 | 700;
  color?: RecursionPath<ShifloTheme["palette"]> | "inherit";
  borderColor?: RecursionPath<ShifloTheme["palette"]>;
  textAlign?: "left" | "center" | "right";
  noWrap?: boolean;
  lineClamp?: number;
}

export type TypographyProps<T extends ElementType> = BaseTypographyProps &
  PolymorphicComponentProps<T>;

export type TypographyComponent<DT extends ElementType = "div"> = <T extends ElementType = DT>(
  props: TypographyProps<T>
) => ReactNode;
