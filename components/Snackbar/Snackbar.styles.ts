import styled from "@emotion/styled";
import { motion } from "motion/react";

import { SnackbarProps } from "@components/Snackbar/Snackbar.typing";

export const StyledSnackbar = styled(motion.div)<
  Pick<SnackbarProps, "transitionDuration" | "maxWidth">
>`
  position: fixed;
  left: 50%;
  bottom: ${({ theme: { spacing } }) =>
    `calc(${spacing["800"]} + var(--safe-area-inset-bottom, 0px))`};
  display: flex;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing["400"]};
  width: calc(100% - ${({ theme: { spacing } }) => spacing["800"]});
  max-width: ${({ maxWidth = "375px" }) => maxWidth};
  min-height: 56px;
  padding: ${({ theme: { spacing } }) => spacing["400"]};
  background-color: ${({
    theme: {
      palette: { neutral }
    }
  }) => neutral["900"]};
  border-radius: ${({ theme: { radius } }) => radius["400"]};
  z-index: 1;
`;

export const StartAdornment = styled.div`
  white-space: nowrap;
`;

export const Content = styled.div`
  flex-grow: 1;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${({
    theme: {
      palette: { common },
      typography: { body2 }
    }
  }) => ({
    fontSize: body2.fontSize,
    lineHeight: body2.lineHeight,
    color: common.surface
  })}
`;

export const Action = styled.div`
  white-space: nowrap;
`;
