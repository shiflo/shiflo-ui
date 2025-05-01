import styled from "basic-styled";

import { SnackbarProps } from "@components/Snackbar/Snackbar.typing";

export const StyledSnackbar = styled.div<
  Pick<SnackbarProps, "transitionDuration"> & {
    ease: "in" | "out";
  }
>`
  position: fixed;
  bottom: ${({ theme: { spacing } }) =>
    `calc(${spacing["800"]} + var(--safe-area-inset-bottom, 0px))`};
  left: 50%;
  display: flex;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing["400"]};
  width: 100%;
  max-width: calc(100% - ${({ theme: { spacing } }) => spacing["800"]});
  min-height: 56px;
  padding: ${({ theme: { spacing } }) => spacing["400"]};
  background-color: ${({
    theme: {
      palette: { neutral }
    }
  }) => neutral["900"]};
  border-radius: ${({ theme: { radius } }) => radius["400"]};
  z-index: 1;

  transition:
    opacity ${({ transitionDuration }) => `${transitionDuration}ms`}
      ${({ ease }) => (ease === "in" ? "ease-in" : "ease-out")},
    transform ${({ transitionDuration }) => `${transitionDuration}ms`},
    background-color 0.2s;
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
