import { ComponentPropsWithRef } from "react";

export interface DialogProps extends ComponentPropsWithRef<"div"> {
  open?: boolean;
  onClose?: () => void;
  transitionDuration?: number;
}
