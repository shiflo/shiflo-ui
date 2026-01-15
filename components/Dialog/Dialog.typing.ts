import type { ComponentPropsWithRef } from "react";

import type { UtilityProps } from "@typings/utility";

export interface DialogProps extends ComponentPropsWithRef<"div">, Pick<UtilityProps, "css"> {
  open?: boolean;
  onClose?: () => void;
  transitionDuration?: number;
  maxWidth?: string;
  disablePortal?: boolean;
}
