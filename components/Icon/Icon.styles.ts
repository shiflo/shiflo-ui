import styled from "basic-styled";

import { BaseIconProps } from "@components/Icon/Icon.typing";
import getValueByPath from "@utils/getValueByPath";

export const StyledIcon = styled.svg<BaseIconProps>`
  transition:
    width 0.2s,
    height 0.2s,
    color 0.2s;

  width: ${({ width }) => `${width || 24}px`};
  height: ${({ height }) => `${height || 24}px`};
  color: ${({ theme: { palette }, color }) => getValueByPath(palette, color || "") || "inherit"};
`;
