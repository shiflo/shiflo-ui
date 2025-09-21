import radius from "@theme/radius";
import spacing from "@theme/spacing";
import typography from "@theme/typography";

import type { ShifloTheme } from "@theme/typing";

const light: ShifloTheme = {
  mode: "light",
  palette: {
    primary: {
      main: "#0066CC",
      light: "#3399FF",
      dark: "#004499",
      hover: "#1A80E6",
      active: "#004499",
      glow: "#1A80E6",
      alpha: {
        5: "rgba(0, 102, 204, 0.05)",
        10: "rgba(0, 102, 204, 0.1)",
        20: "rgba(0, 102, 204, 0.2)",
        30: "rgba(0, 102, 204, 0.3)"
      }
    },
    accent: {
      main: "#3399FF",
      light: "#66B3FF",
      dark: "#0066CC",
      hover: "#4DA6FF",
      active: "#0066CC",
      alpha: {
        5: "rgba(51, 153, 255, 0.05)",
        10: "rgba(51, 153, 255, 0.1)",
        20: "rgba(51, 153, 255, 0.2)",
        30: "rgba(51, 153, 255, 0.3)"
      }
    },
    secondary: {
      main: "#F8F9FA",
      light: "#FFFFFF",
      dark: "#CED4DA",
      alpha: {
        5: "rgba(248, 249, 250, 0.05)",
        10: "rgba(248, 249, 250, 0.1)",
        20: "rgba(248, 249, 250, 0.2)",
        30: "rgba(248, 249, 250, 0.3)"
      }
    },
    neutral: {
      100: "#F8F9FA",
      200: "#E9ECEF",
      300: "#DEE2E6",
      400: "#BCC0C4",
      500: "#ADB5BD",
      600: "#6C757D",
      700: "#495057",
      800: "#343A40",
      900: "#212529"
    },
    feedback: {
      success: {
        light: "#C7EFC8",
        main: "#A3D9A5",
        dark: "#6CBF73"
      },
      warning: {
        light: "#FFF2C2",
        main: "#FFE59A",
        dark: "#E5C67C"
      },
      error: {
        light: "#FBC7C7",
        main: "#F5A3A3",
        dark: "#D67C7C"
      },
      info: {
        light: "#C7E0FA",
        main: "#A3CFF5",
        dark: "#74A8DD"
      }
    },
    common: {
      background: "#FFFFFF",
      surface: "#FFFFFF",
      overlay: "rgba(0, 0, 0, 0.3)"
    },
    text: {
      primary: "#212529",
      secondary: "#495057",
      disabled: "#ADB5BD"
    },
    border: {
      light: "#DEE2E6",
      main: "#ADB5BD",
      dark: "#6C757D"
    },
    gradient: {
      primaryToAccent: "linear-gradient(135deg, hsl(225 100% 40%) 0%, hsl(225 100% 60%) 100%)"
    }
  },
  typography,
  spacing,
  radius
};

export default light;
