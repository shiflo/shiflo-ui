import { ReactNode, ComponentPropsWithRef } from "react";

export interface SnackbarProps extends ComponentPropsWithRef<"div"> {
  open?: boolean;
  onClose?: () => void;
  transitionDuration?: number;
  startIcon?: ReactNode;
  action?: ReactNode;
  autoHideDuration?: number;
  disableAutoHide?: boolean;
}
