import styled from "@emotion/styled";
import { motion } from "motion/react";

import type { DialogProps } from "@components/Dialog/Dialog.typing";

export const StyledDialog = styled(motion.div)<
  Pick<DialogProps, "transitionDuration" | "maxWidth">
>`
  width: calc(100% - ${({ theme: { spacing } }) => spacing["800"]});
  max-width: ${({ maxWidth = "375px" }) => maxWidth};
  max-height: calc(100% - ${({ theme: { spacing } }) => spacing["800"]});
  overflow-y: auto;
  margin: ${({ theme: { spacing } }) => spacing["400"]};
  margin-bottom: ${({ theme: { spacing } }) =>
    `calc(${spacing["400"]} + var(--safe-area-inset-bottom, 0px))`};
  border-radius: ${({ theme: { radius } }) => radius["150"]};
  background-color: ${({
    theme: {
      palette: { common }
    }
  }) => common.background};
`;
