import { ComponentPropsWithRef } from "react";

export interface TagProps extends ComponentPropsWithRef<"span"> {
  color?: "primary" | "warning" | "error" | "info" | "success";
}
