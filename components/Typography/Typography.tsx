import { StyledTypography } from "@components/Typography/Typography.styles";
import { TypographyProps } from "@components/Typography/Typography.typing";

function Typography({ ref, variant = "body2", fontWeight = 400, ...props }: TypographyProps) {
  return <StyledTypography ref={ref} variant={variant} fontWeight={fontWeight} {...props} />;
}

export default Typography;
