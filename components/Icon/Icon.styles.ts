import styled from "basic-styled";

import { IconProps } from "@components/Icon/Icon.typing";
import getValueByPath from "@utils/getValueByPath";

export const StyledIcon = styled.svg<Pick<IconProps, "color">>`
  transition:
    width 0.2s,
    height 0.2s,
    color 0.2s;
  color: ${({ theme: { palette }, color }) => getValueByPath(palette, color || "") || "inherit"};
`;
