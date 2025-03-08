import styled from "basic-styled";

import getValueByPath from "@utils/getValueByPath";

import { IconProps } from "./Icon.typing";

export const StyledIcon = styled.svg<Pick<IconProps, "color">>`
  color: ${({ theme: { palette }, color }) => getValueByPath(palette, color || "") || "inherit"};
  transition: color 0.2s;
`;
