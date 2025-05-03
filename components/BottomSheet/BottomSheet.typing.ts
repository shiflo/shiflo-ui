import { ComponentPropsWithRef } from "react";

import { UtilityProps } from "@typings/utility";
export interface BottomSheetProps extends ComponentPropsWithRef<"div">, Pick<UtilityProps, "css"> {
  open?: boolean;
  onClose?: () => void;
  transitionDuration?: number;
  hideDragHandleBar?: boolean;
  hideOverlay?: boolean;
}
