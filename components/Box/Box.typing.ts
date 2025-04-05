import { ElementType, ReactNode } from "react";

import { PolymorphicComponentProps } from "@typings/component";
import { RecursionPath, UtilityProps } from "@typings/utility";

import type { BasicTheme } from "basic-styled";

export interface BaseBoxProps extends UtilityProps {
  backgroundColor?: RecursionPath<BasicTheme["palette"]>;
  color?: RecursionPath<BasicTheme["palette"]> | "inherit";
  borderColor?: RecursionPath<BasicTheme["palette"]>;
}

export type BoxProps<T extends ElementType> = BaseBoxProps & PolymorphicComponentProps<T>;

export type BoxComponent<DT extends ElementType = "div"> = <T extends ElementType = DT>(
  props: BoxProps<T>
) => ReactNode;
