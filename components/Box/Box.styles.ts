import styled from "@emotion/styled";

import { BaseBoxProps } from "@components/Box/Box.typing";
import getUtilityProps from "@utils/getUtilityProps";
import getValueByPath from "@utils/getValueByPath";

export const StyledBox = styled.div<BaseBoxProps>`
  transition: all 0.2s;

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
