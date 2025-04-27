import styled from "basic-styled";

import { OverlayProps } from "@components/Overlay/Overlay.typing";

export const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledOverlay = styled.div<
  Pick<OverlayProps, "transitionDuration"> & {
    ease: "in" | "out";
  }
>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({
    theme: {
      palette: { common }
    }
  }) => common.overlay};
  transition:
    opacity ${({ transitionDuration }) => `${transitionDuration}ms`}
      ${({ ease }) => (ease === "in" ? "ease-in" : "ease-out")},
    background-color 0.2s;
`;

export const OverlayContent = styled.div<Pick<OverlayProps, "placement">>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${({ placement }) => {
    const style = {};

    switch (placement) {
      case "top-left":
        Object.assign(style, {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start"
        });
        break;
      case "top-right":
        Object.assign(style, {
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start"
        });
        break;
      case "bottom-left":
        Object.assign(style, {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end"
        });
        break;
      case "bottom-right":
        Object.assign(style, {
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end"
        });
        break;
      case "center-top":
        Object.assign(style, {
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start"
        });
        break;
      case "center-bottom":
        Object.assign(style, {
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end"
        });
        break;
      case "center-middle":
        Object.assign(style, {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        });
        break;
      case "center-left":
        Object.assign(style, {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center"
        });
        break;
      case "center-right":
        Object.assign(style, {
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center"
        });
        break;
      default:
        break;
    }

    return style;
  }}
`;
