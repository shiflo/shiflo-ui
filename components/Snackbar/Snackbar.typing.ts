import { ReactNode, PropsWithChildren } from "react";

import { HTMLMotionProps } from "motion/react";

export interface SnackbarProps extends PropsWithChildren<HTMLMotionProps<"div">> {
  open?: boolean;
  onClose?: () => void;
  transitionDuration?: number;
  startIcon?: ReactNode;
  action?: ReactNode;
  maxWidth?: string;
  autoHideDuration?: number;
  disableAutoHide?: boolean;
}
