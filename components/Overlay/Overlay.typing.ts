import { ComponentPropsWithRef } from "react";

export interface OverlayProps extends ComponentPropsWithRef<"div"> {
  open?: boolean;
  onClose: () => void;
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
}
