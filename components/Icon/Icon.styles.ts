import type { FC } from "react";

import styled from "@emotion/styled";

import getValueByPath from "@utils/getValueByPath";

import type { BaseIconProps } from "@components/Icon/Icon.typing";

export const StyledIcon = (Icon: FC<BaseIconProps>) => styled(Icon)<BaseIconProps>`
  transition: all 0.2s;

  width: ${({ width }) => `${width || 24}px`};
  height: ${({ height }) => `${height || 24}px`};
  color: ${({ theme: { palette }, color }) => getValueByPath(palette, color || "") || "inherit"};
`;
