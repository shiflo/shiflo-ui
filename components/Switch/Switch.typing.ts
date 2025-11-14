import type { ComponentPropsWithRef, MouseEvent } from "react";

import type { UtilityProps } from "@typings/utility";

export interface SwitchProps
  extends Omit<ComponentPropsWithRef<"button">, "onChange">,
    Pick<UtilityProps, "css"> {
  checked?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onChange?: (event: MouseEvent<HTMLButtonElement>, checked: boolean) => void;
}
