export default function getObjectPaths<T extends object>(obj: T, prefix = ""): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return value && typeof value === "object" ? getObjectPaths(value, path) : [path];
  });
}
