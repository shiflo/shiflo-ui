import { forwardRef } from "react";

import { StyledTypography } from "./Typography.styles";
import { TypographyProps } from "./Typography.typing";

const Typography = forwardRef<HTMLDivElement, TypographyProps>(function Typography(
  { children, variant = "body2", fontWeight = 400, ...props },
  ref
) {
  return (
    <StyledTypography ref={ref} variant={variant} fontWeight={fontWeight} {...props}>
      {children}
    </StyledTypography>
  );
});

export default Typography;
