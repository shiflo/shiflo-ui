import styled from "@emotion/styled";
import { motion } from "motion/react";

export const StyledTag = styled(motion.span)`
  transition: all 0.3s;
  cursor: default;

  padding: ${({ theme: { spacing } }) => spacing["100"]};
  border-radius: ${({ theme: { radius } }) => radius["200"]};

  ${({
    theme: {
      mode,
      palette: {
        primary,
        secondary,
        text,
        feedback: { warning, error, info, success }
      }
    },
    color
  }) => {
    const style = {};

    switch (color) {
      case "warning":
        Object.assign(style, {
          backgroundColor: warning.main,
          color: mode === "dark" ? secondary.main : text.primary
        });
        break;
      case "error":
        Object.assign(style, {
          backgroundColor: error.main,
          color: mode === "dark" ? secondary.main : text.primary
        });
        break;
      case "info":
        Object.assign(style, {
          backgroundColor: info.main,
          color: mode === "dark" ? secondary.main : text.primary
        });
        break;
      case "success":
        Object.assign(style, {
          backgroundColor: success.main,
          color: mode === "dark" ? secondary.main : text.primary
        });
        break;
      default:
        Object.assign(style, {
          backgroundColor: primary.main,
          color: secondary.main
        });
        break;
    }

    return style;
  }}

  ${({
    theme: {
      typography: { small2 }
    }
  }) => ({
    fontSize: small2.fontSize,
    fontWeight: 700,
    lineHeight: small2.lineHeight
  })};
`;
