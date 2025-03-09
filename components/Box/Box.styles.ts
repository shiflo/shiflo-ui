import styled from "basic-styled";

import getUtilityProps from "@utils/getUtilityProps";
import getValueByPath from "@utils/getValueByPath";

import { BoxProps } from "./Box.typing";

export const StyledBox = styled.div<BoxProps>`
  transition:
    background-color 0.2s,
    border-color 0.2s,
    color 0.2s;

  ${({ theme: { palette }, backgroundColor, borderColor, color, ...props }) => {
    const style = {};

    Object.assign(style, getUtilityProps(props));

    if (backgroundColor) {
      Object.assign(style, {
        backgroundColor: getValueByPath(palette, backgroundColor)
      });
    }

    if (borderColor) {
      Object.assign(style, {
        borderColor: getValueByPath(palette, borderColor)
      });
    }

    if (color) {
      Object.assign(style, {
        color: getValueByPath(palette, color)
      });
    }

    return style;
  }}
`;
