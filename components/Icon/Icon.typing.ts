import { SVGProps } from "react";

import { ComponentProps, RecursionPath } from "@typings/utility";

import type * as Svgs from "@assets/icons";

import type { BasicTheme } from "basic-styled";

export interface IconProps extends SVGProps<SVGSVGElement>, ComponentProps {
  name: keyof typeof Svgs;
  color?: RecursionPath<BasicTheme["palette"]> | "inherit";
}
