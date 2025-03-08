import { PropsWithChildren } from "react";

import BasicThemeProvider from "basic-styled/setup/ThemeProvider";

import dark from "@theme/dark";
import light from "@theme/light";

interface ThemeProviderProps {
  theme: "light" | "dark";
}

function ThemeProvider({ children, theme }: PropsWithChildren<ThemeProviderProps>) {
  const currentTheme = theme === "dark" ? dark : light;

  return <BasicThemeProvider theme={currentTheme}>{children}</BasicThemeProvider>;
}

export default ThemeProvider;
