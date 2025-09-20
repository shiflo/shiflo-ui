import styled from "@emotion/styled";

import { motion } from "motion/react";

import getUtilityProps from "@utils/getUtilityProps";
import getValueByPath from "@utils/getValueByPath";

import type { BaseTypographyProps } from "@components/Typography/Typography.typing";

export const StyledTypography = styled(motion.div)<BaseTypographyProps>`
  transition: all 0.2s;

  ${({ theme: { typography, palette }, variant, color, fontWeight, borderColor, ...props }) => {
    const { fontSize, lineHeight } = typography[variant || "body2"];
    const style = {
      fontSize,
      lineHeight,
      fontWeight
    };

    Object.assign(style, getUtilityProps(props));

    if (borderColor) {
      Object.assign(style, {
        borderColor: getValueByPath(palette, borderColor) || "inherit"
      });
    }

    Object.assign(style, {
      color: getValueByPath(palette, color) || "inherit"
    });

    return style;
  }};

  ${({ textAlign }) =>
    textAlign
      ? {
          textAlign
        }
      : {}};

  ${({ noWrap }) =>
    noWrap
      ? {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      : {}};

  ${({ lineClamp }) =>
    lineClamp
      ? {
          display: "-webkit-box",
          overflow: "hidden",
          "-webkit-line-clamp": lineClamp,
          "-webkit-box-orient": "vertical"
        }
      : {}};
`;
