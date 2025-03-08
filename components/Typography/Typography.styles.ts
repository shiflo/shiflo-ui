import styled from "basic-styled";

import getValueByPath from "@utils/getValueByPath";

import { TypographyProps } from "./Typography.typing";

export const StyledTypography = styled.div<TypographyProps>`
  transition:
    color 0.2s,
    font-size 0.2s;

  ${({ theme: { typography, palette }, variant, color, fontWeight }) => {
    const { fontSize, lineHeight } = typography[variant || "body2"];

    return {
      fontSize,
      lineHeight,
      fontWeight,
      color: getValueByPath(palette, color || "inherit")
    };
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
