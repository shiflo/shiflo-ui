import { Children, isValidElement, ReactNode } from "react";

import * as Svgs from "@assets/icons";
import { StyledIcon } from "@components/Icon/Icon.styles";
import { IconProps } from "@components/Icon/Icon.typing";

function Icon({ ref, name, width = 24, height = 24, ...props }: IconProps) {
  const SvgIcon = Svgs[name] as unknown as () => ReactNode;

  return Children.map(SvgIcon(), (child) => {
    if (!isValidElement<IconProps>(child)) {
      return null;
    }

    const newProps = {
      ...props,
      ...child.props
    };

    newProps.width = width ?? newProps.width;
    newProps.height = height ?? newProps.height;

    return <StyledIcon ref={ref} {...newProps} />;
  });
}

export default Icon;
