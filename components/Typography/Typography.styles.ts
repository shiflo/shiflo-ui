import styled from "basic-styled";

import getUtilityProps from "@utils/getUtilityProps";
import getValueByPath from "@utils/getValueByPath";

import { TypographyProps } from "./Typography.typing";

export const StyledTypography = styled.div<TypographyProps>`
  transition:
    font-size 0.2s,
    line-height 0.2s,
    border-width 0.2s,
    border-radius 0.2s,
    border-color 0.2s,
    color 0.2s;

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
        borderColor: getValueByPath(palette, borderColor)
      });
    }

    Object.assign(style, {
      color: getValueByPath(palette, color)
    });

    return style;
  }};

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
