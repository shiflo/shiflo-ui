import { PropsWithChildren } from "react";

import type { UtilityProps } from "@typings/utility";
import type { HTMLMotionProps } from "motion/react";

export interface DialogProps
  extends PropsWithChildren<HTMLMotionProps<"div"> & Pick<UtilityProps, "css">> {
  open?: boolean;
  onClose?: () => void;
  transitionDuration?: number;
  maxWidth?: string;
}
