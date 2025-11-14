import type { ReactNode } from "react";

import * as Svgs from "@assets/icons";
import { StyledIcon } from "@components/Icon/Icon.styles";

import type { IconProps } from "@components/Icon/Icon.typing";

function Icon({ name, ...props }: IconProps) {
  const SvgIcon = Svgs[name] as unknown as () => ReactNode;
  const StyledSvgIcon = StyledIcon(SvgIcon);

  return <StyledSvgIcon name={name} {...props} />;
}

export default Icon;
