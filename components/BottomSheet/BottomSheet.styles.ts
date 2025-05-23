import styled from "basic-styled";

import { BottomSheetProps } from "@components/BottomSheet/BottomSheet.typing";

export const StyledBottomSheet = styled.div<
  Pick<BottomSheetProps, "maxWidth" | "transitionDuration"> & {
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
    background-color 0.2s;
`;

export const DragHandleBarWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  padding: ${({ theme: { spacing } }) => spacing["100"]};
  background-color: ${({
    theme: {
      palette: { common }
    }
  }) => common.background};
  transition: background-color 0.2s;
`;

export const DragHandleBar = styled.div`
  width: 24px;
  height: 4px;
  border-radius: ${({ theme: { radius } }) => radius["100"]};
  background-color: ${({
    theme: {
      palette: { border }
    }
  }) => border.main};
  transition: background-color 0.2s;
`;
