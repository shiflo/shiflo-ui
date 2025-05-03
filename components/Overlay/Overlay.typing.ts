import { ComponentPropsWithRef } from "react";

import { UtilityProps } from "@typings/utility";

export interface OverlayProps extends ComponentPropsWithRef<"div">, Pick<UtilityProps, "css"> {
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
}
