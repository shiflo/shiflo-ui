import { StyledTypography } from "@components/Typography/Typography.styles";

import type { TypographyComponent } from "@components/Typography/Typography.typing";

const Typography: TypographyComponent = (props) => {
  return <StyledTypography {...props} />;
};

export default Typography;
