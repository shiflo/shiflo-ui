import { PropsWithChildren } from "react";

import { HTMLMotionProps } from "motion/react";

import type { UtilityProps } from "@typings/utility";

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
