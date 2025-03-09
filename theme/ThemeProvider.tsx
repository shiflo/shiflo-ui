import { PropsWithChildren } from "react";

import ResetStyle from "basic-styled/setup/ResetStyle";
import BasicThemeProvider from "basic-styled/setup/ThemeProvider";

import dark from "@theme/dark";
import GlobalStyle from "@theme/GlobalStyle";
import light from "@theme/light";

interface ThemeProviderProps {
  theme: "light" | "dark";
}

function ThemeProvider({ children, theme }: PropsWithChildren<ThemeProviderProps>) {
  const currentTheme = theme === "dark" ? dark : light;

  return (
    <BasicThemeProvider theme={currentTheme}>
      <ResetStyle />
      <GlobalStyle />
      {children}
    </BasicThemeProvider>
  );
}

export default ThemeProvider;
