import styled from "basic-styled";

import { BaseTypographyProps } from "@components/Typography/Typography.typing";
import getUtilityProps from "@utils/getUtilityProps";
import getValueByPath from "@utils/getValueByPath";

export const StyledTypography = styled.div<BaseTypographyProps>`
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
