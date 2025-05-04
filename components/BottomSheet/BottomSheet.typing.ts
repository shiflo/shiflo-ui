import { ComponentPropsWithRef } from "react";

import { UtilityProps } from "@typings/utility";
export interface BottomSheetProps extends ComponentPropsWithRef<"div">, Pick<UtilityProps, "css"> {
  open?: boolean;
  onClose?: () => void;
  transitionDuration?: number;
  maxWidth?: string;
  hideDragHandleBar?: boolean;
  hideOverlay?: boolean;
}
