import type { HTMLMotionProps } from "motion/react";

export interface OverlayProps extends HTMLMotionProps<"div"> {
  open?: boolean;
  onClose?: () => void;
  transitionDuration?: number;
  placement?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center-top"
    | "center-bottom"
    | "center-middle"
    | "center-left"
    | "center-right";
  hideOverlay?: boolean;
}
