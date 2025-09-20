import type { PropsWithChildren } from "react";

import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

import dark from "@theme/dark";
import GlobalStyle from "@theme/GlobalStyle";
import light from "@theme/light";

interface ThemeProviderProps {
  theme: "light" | "dark";
}

function ThemeProvider({ children, theme }: PropsWithChildren<ThemeProviderProps>) {
  const currentTheme = theme === "dark" ? dark : light;

  return (
    <EmotionThemeProvider theme={currentTheme}>
      <GlobalStyle />
      {children}
    </EmotionThemeProvider>
  );
}

export default ThemeProvider;
