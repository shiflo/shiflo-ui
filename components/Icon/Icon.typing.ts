import { SVGProps } from "react";

import { RecursionPath } from "@typings/utility";

import type * as Svgs from "@assets/icons";

import type { BasicTheme } from "basic-styled";

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof Svgs;
  color?: RecursionPath<BasicTheme["palette"]> | "inherit";
}
