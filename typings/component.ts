import type { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType } from "react";

export type PolymorphicComponentProps<T extends ElementType> = {
  as?: T | ElementType;
} & ComponentPropsWithoutRef<T> & { ref?: PolymorphicRef<T> };

export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>["ref"];
