import { ReactNode, ComponentPropsWithRef } from "react";

import { UtilityProps } from "@typings/utility";

export interface SnackbarProps extends ComponentPropsWithRef<"div">, UtilityProps {
  open?: boolean;
  onClose?: () => void;
  transitionDuration?: number;
  startIcon?: ReactNode;
  action?: ReactNode;
  maxWidth?: string;
  autoHideDuration?: number;
  disableAutoHide?: boolean;
}
