import { forwardRef } from "react";

import { StyledTypography } from "@components/Typography/Typography.styles";
import { TypographyProps } from "@components/Typography/Typography.typing";

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
