import styled from "@emotion/styled";
import { motion } from "motion/react";

import type { SwitchProps } from "@components/Switch/Switch.typing";

export const StyledSwitch = styled(motion.button)<
  Pick<SwitchProps, "checked" | "disabled" | "size">
>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme: { spacing } }) => spacing["100"]};
  border-radius: 9999px;
  transition: background-color 0.3s;
  cursor: pointer;

  ${({ theme: { palette }, checked, disabled, size }) => {
    const style = {};

    switch (size) {
      case "small":
        Object.assign(style, {
          width: "40px",
          height: "24px",
          "&::after": {
            width: "16px",
            height: "16px"
          }
        });
        break;
      case "large":
        Object.assign(style, {
          width: "56px",
          height: "32px",
          "&::after": {
            width: "24px",
            height: "24px"
          }
        });
        break;
      default:
        Object.assign(style, {
          width: "48px",
          height: "28px",
          "&::after": {
            width: "20px",
            height: "20px"
          }
        });
        break;
    }

    if (checked) {
      Object.assign(style, {
        backgroundColor: palette.primary.main
      });
    } else {
      Object.assign(style, {
        backgroundColor: palette.neutral["300"]
      });
    }

    if (disabled) {
      Object.assign(style, {
        backgroundColor: palette.neutral["200"]
      });
    }

    return style;
  }};

  &:disabled {
    cursor: not-allowed;
  }
`;

export const StyledSwitchThumb = styled(motion.div)<Pick<SwitchProps, "size">>`
  background-color: ${({
    theme: {
      palette: { common }
    }
  }) => common.background};
  border-radius: 50%;

  ${({ size }) => {
    switch (size) {
      case "small":
        return {
          width: "16px",
          height: "16px"
        };
      case "large":
        return {
          width: "24px",
          height: "24px"
        };
      default:
        return {
          width: "20px",
          height: "20px"
        };
    }
  }}
`;
