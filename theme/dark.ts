import radius from "@theme/radius";
import spacing from "@theme/spacing";
import typography from "@theme/typography";

import type { BasicTheme } from "basic-styled";

const dark: BasicTheme = {
  mode: "dark",
  palette: {
    primary: {
      main: "#5A8BFF",
      light: "#A5C0FF",
      dark: "#004ECC",
      hover: "#7EAFFF",
      active: "#336DFF",
      alpha: {
        5: "rgba(90, 139, 255, 0.05)",
        10: "rgba(90, 139, 255, 0.1)",
        20: "rgba(90, 139, 255, 0.2)",
        30: "rgba(90, 139, 255, 0.3)"
      }
    },
    secondary: {
      main: "#2D2F36",
      light: "#40434A",
      dark: "#1F2024",
      alpha: {
        5: "rgba(45, 47, 54, 0.05)",
        10: "rgba(45, 47, 54, 0.1)",
        20: "rgba(45, 47, 54, 0.2)",
        30: "rgba(45, 47, 54, 0.3)"
      }
    },
    neutral: {
      100: "#2D2F36",
      200: "#40434A",
      300: "#52565D",
      400: "#6C757D",
      500: "#889096",
      600: "#A5ACB3",
      700: "#C0C7CE",
      800: "#D5DBE0",
      900: "#EAECEF"
    },
    feedback: {
      success: {
        light: "#508A5A",
        main: "#6CBF73",
        dark: "#9FD8A1"
      },
      warning: {
        light: "#A47B14",
        main: "#E5C67C",
        dark: "#FFE59A"
      },
      error: {
        light: "#8C4F4F",
        main: "#D67C7C",
        dark: "#F5A3A3"
      },
      info: {
        light: "#446E9E",
        main: "#74A8DD",
        dark: "#A3CFF5"
      }
    },
    common: {
      background: "#22252A",
      surface: "#30333A",
      overlay: "rgba(0, 0, 0, 0.7)"
    },
    text: {
      primary: "#EAECEF",
      secondary: "#C0C7CE",
      disabled: "#6C757D"
    },
    border: {
      light: "#52565D",
      main: "#6C757D",
      dark: "#A5ACB3"
    }
  },
  typography,
  spacing,
  radius
};

export default dark;
