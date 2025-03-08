export default function getValueByPath<T extends object>(object: T, path: string): string {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return path.split(".").reduce((acc, key) => acc && acc[key], object) || "";
}
