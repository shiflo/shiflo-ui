import { ComponentPropsWithRef } from "react";

export interface BottomSheetProps extends ComponentPropsWithRef<"div"> {
  open?: boolean;
  onClose: () => void;
  transitionDuration?: number;
  hideDragHandleBar?: boolean;
}
