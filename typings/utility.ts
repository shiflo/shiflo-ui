export type RecursionPath<T, Prefix extends string = ""> = Exclude<
  {
    [K in keyof T & (string | number)]: T[K] extends object
      ? `${Prefix}${K}` | RecursionPath<T[K], `${Prefix}${K}.`>
      : `${Prefix}${K}`;
  }[keyof T & (string | number)],
  "primary" | "secondary"
>;
