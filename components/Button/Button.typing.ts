import { ComponentPropsWithRef, ReactNode } from "react";

export interface BaseButtonProps extends ComponentPropsWithRef<"button"> {
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

export type ButtonProps = FilledButtonProps | GhostButtonProps | TextButtonProps;
