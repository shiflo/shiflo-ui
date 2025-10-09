import styled from "@emotion/styled";

import getValueByPath from "@utils/getValueByPath";

import type { BaseIconProps } from "@components/Icon/Icon.typing";

export const StyledIcon = styled.svg<BaseIconProps>`
  transition:
    width 0.3s,
    height 0.3s,
    color 0.3s;

  width: ${({ width }) => `${width || 24}px`};
  height: ${({ height }) => `${height || 24}px`};
  color: ${({ theme: { palette }, color }) => getValueByPath(palette, color || "") || "inherit"};
`;
