import styled from "@emotion/styled";
import { motion } from "motion/react";

import getValueByPath from "@utils/getValueByPath";

import type { TagProps } from "@components/Tag/Tag.typing";

export const StyledTag = styled(motion.span)<Pick<TagProps, "color" | "textColor">>`
  transition: all 0.3s;
  cursor: default;

  padding: ${({ theme: { spacing } }) => spacing["100"]};
  border-radius: ${({ theme: { radius } }) => radius["200"]};

  ${({ theme: { palette }, color, textColor }) => {
    const style = {};

    Object.assign(style, {
      backgroundColor: getValueByPath(palette, color) || "inherit",
      color: getValueByPath(palette, textColor) || "inherit"
    });

    return style;
  }}

  ${({
    theme: {
      typography: { small2 }
    }
  }) => ({
    fontSize: small2.fontSize,
    fontWeight: 700,
    lineHeight: small2.lineHeight
  })};
`;
