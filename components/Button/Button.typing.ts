import { ButtonHTMLAttributes } from "react";

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "xSmall" | "small" | "medium" | "large";
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
