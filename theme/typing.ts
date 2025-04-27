import "basic-styled";

import type radius from "@theme/radius";
import type spacing from "@theme/spacing";
import type typography from "@theme/typography";

declare module "basic-styled" {
  export interface BasicTheme {
    mode: "light" | "dark";
    palette: {
      primary: {
        main: string;
        light: string;
        dark: string;
        hover: string;
        active: string;
        alpha: {
          5: string;
          10: string;
          20: string;
          30: string;
        };
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
        alpha: {
          5: string;
          10: string;
          20: string;
          30: string;
        };
      };
      neutral: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      feedback: {
        success: {
          light: string;
          main: string;
          dark: string;
        };
        warning: {
          light: string;
          main: string;
          dark: string;
        };
        error: {
          light: string;
          main: string;
          dark: string;
        };
        info: {
          light: string;
          main: string;
          dark: string;
        };
      };
      common: {
        background: string;
        surface: string;
        overlay: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      border: {
        light: string;
        main: string;
        dark: string;
      };
    };
    typography: typeof typography;
    spacing: typeof spacing;
    radius: typeof radius;
  }
}
