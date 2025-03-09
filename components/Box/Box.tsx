import { forwardRef, PropsWithChildren } from "react";

import { StyledBox } from "@components/Box/Box.styles";
import { BoxProps } from "@components/Box/Box.typing";

const Box = forwardRef<HTMLDivElement, PropsWithChildren<BoxProps>>(function Box(
  { children, ...props },
  ref
) {
  return (
    <StyledBox ref={ref} {...props}>
      {children}
    </StyledBox>
  );
});

export default Box;
