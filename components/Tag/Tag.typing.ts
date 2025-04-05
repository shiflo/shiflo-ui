import { ComponentPropsWithRef } from "react";

import { UtilityProps } from "@typings/utility";

export interface TagProps extends ComponentPropsWithRef<"span">, Pick<UtilityProps, "css"> {
  color?: "primary" | "warning" | "error" | "info" | "success";
}
