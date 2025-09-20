import type { PropsWithChildren } from "react";

import type { UtilityProps } from "@typings/utility";
import type { HTMLMotionProps } from "motion/react";

export interface BottomSheetProps
  extends PropsWithChildren<HTMLMotionProps<"div"> & Pick<UtilityProps, "css">> {
  open?: boolean;
  onClose?: () => void;
  transitionDuration?: number;
  maxWidth?: string;
  hideDragHandleBar?: boolean;
  hideOverlay?: boolean;
  dragThreshold?: number;
}
