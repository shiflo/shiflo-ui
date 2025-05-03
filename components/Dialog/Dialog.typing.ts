import { ComponentPropsWithRef } from "react";

import { UtilityProps } from "@typings/utility";

export interface DialogProps extends ComponentPropsWithRef<"div">, Pick<UtilityProps, "css"> {
  open?: boolean;
  onClose?: () => void;
  transitionDuration?: number;
}
