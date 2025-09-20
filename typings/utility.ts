import radius from "@theme/radius";
import spacing from "@theme/spacing";

import type { Interpolation } from "@emotion/serialize";
import type { ShifloTheme } from "@theme/typing";

import type { Properties } from "csstype";

export type UtilityProps = Partial<
  Pick<
    Properties,
    | "display"
    | "alignItems"
    | "justifyContent"
    | "flex"
    | "flexWrap"
    | "flexDirection"
    | "flexGrow"
    | "flexFlow"
    | "flexBasis"
    | "flexShrink"
    | "border"
    | "borderTop"
    | "borderBottom"
    | "borderRight"
    | "borderLeft"
  > &
    Record<
      "m" | "mt" | "mb" | "mr" | "ml" | "p" | "pt" | "pb" | "pl" | "pr" | "gap",
      keyof typeof spacing
    > &
    Record<"br" | "brtl" | "brtr" | "brml" | "brmr", keyof typeof radius>
> & {
  css?: Interpolation<ShifloTheme>;
};

export type RecursionPath<T, Prefix extends string = ""> = Exclude<
  {
    [K in keyof T & (string | number)]: T[K] extends object
      ? `${Prefix}${K}` | RecursionPath<T[K], `${Prefix}${K}.`>
      : `${Prefix}${K}`;
  }[keyof T & (string | number)],
  "primary" | "secondary"
>;
