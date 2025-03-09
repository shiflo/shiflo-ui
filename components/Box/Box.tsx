import { forwardRef } from "react";

import { StyledBox } from "./Box.styles";
import { BoxProps } from "./Box.typing";

const Box = forwardRef<HTMLDivElement, BoxProps>(function Box({ children, ...props }, ref) {
  return (
    <StyledBox ref={ref} {...props}>
      {children}
    </StyledBox>
  );
});

export default Box;
