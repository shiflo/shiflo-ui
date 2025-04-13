import styled from "basic-styled";

import { BaseBoxProps } from "@components/Box/Box.typing";
import getUtilityProps from "@utils/getUtilityProps";
import getValueByPath from "@utils/getValueByPath";

export const StyledBox = styled.div<BaseBoxProps>`
  transition:
    background-color 0.2s,
    border-width 0.2s,
    border-radius 0.2s,
    border-color 0.2s,
    color 0.2s;

  ${({ theme: { palette }, backgroundColor, borderColor, color, ...props }) => {
    const style = {};

    Object.assign(style, getUtilityProps(props));

    if (backgroundColor) {
      Object.assign(style, {
        backgroundColor: getValueByPath(palette, backgroundColor) || "inherit"
      });
    }

    if (borderColor) {
      Object.assign(style, {
        borderColor: getValueByPath(palette, borderColor) || "inherit"
      });
    }

    if (color) {
      Object.assign(style, {
        color: getValueByPath(palette, color) || "inherit"
      });
    }

    return style;
  }}
`;
