import type { ComponentPropsWithRef, ReactNode } from "react";

import type { UtilityProps } from "@typings/utility";

export interface BaseButtonProps extends Pick<UtilityProps, "css"> {
  size?: "xSmall" | "small" | "medium" | "large";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export interface FilledButtonProps extends BaseButtonProps {
  variant?: "filled";
  color?: "primary" | "secondary";
}

export interface GhostButtonProps extends BaseButtonProps {
  variant?: "ghost";
  color?: "primary";
}

export interface TextButtonProps extends BaseButtonProps {
  variant?: "text";
  color?: "secondary";
}

export interface GradientButtonProps extends BaseButtonProps {
  variant?: "gradient";
  color?: "primary";
}

export type ButtonProps = (
  | FilledButtonProps
  | GhostButtonProps
  | TextButtonProps
  | GradientButtonProps
) &
  ComponentPropsWithRef<"button">;
