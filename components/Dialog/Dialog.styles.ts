import styled from "basic-styled";

import { DialogProps } from "@components/Dialog/Dialog.typing";

export const StyledDialog = styled.div<
  Pick<DialogProps, "transitionDuration" | "maxWidth"> & {
    ease: "in" | "out";
  }
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
  transition:
    transform ${({ transitionDuration }) => `${transitionDuration}ms`}
      ${({ ease }) => (ease === "in" ? "ease-out" : "ease-in")},
    opacity ${({ transitionDuration }) => `${transitionDuration}ms`}
      ${({ ease }) => (ease === "in" ? "ease-out" : "ease-in")},
    background-color 0.2s;
`;
