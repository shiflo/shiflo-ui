import type { ElementType, ReactNode } from "react";

import type { ShifloTheme } from "@theme/typing";
import type { PolymorphicComponentProps } from "@typings/component";
import type { RecursionPath, UtilityProps } from "@typings/utility";

export interface BaseBoxProps extends UtilityProps {
  backgroundColor?: RecursionPath<ShifloTheme["palette"]>;
  color?: RecursionPath<ShifloTheme["palette"]> | "inherit";
  borderColor?: RecursionPath<ShifloTheme["palette"]>;
}

export type BoxProps<T extends ElementType> = BaseBoxProps & PolymorphicComponentProps<T>;

export type BoxComponent<DT extends ElementType = "div"> = <T extends ElementType = DT>(
  props: BoxProps<T>
) => ReactNode;
