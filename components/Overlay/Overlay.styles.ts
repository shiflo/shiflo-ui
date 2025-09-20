import styled from "@emotion/styled";

import { motion } from "motion/react";

import { OverlayProps } from "@components/Overlay/Overlay.typing";

export const OverlayWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const StyledOverlay = styled(motion.div)<Pick<OverlayProps, "transitionDuration">>`
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
`;

export const OverlayContent = styled(motion.div)<Pick<OverlayProps, "placement">>`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ placement }) => {
    const style = {};

    switch (placement) {
      case "top-left":
        Object.assign(style, {
          top: 0,
          left: 0
        });
        break;
      case "top-right":
        Object.assign(style, {
          top: 0,
          right: 0
        });
        break;
      case "bottom-left":
        Object.assign(style, {
          bottom: 0,
          left: 0
        });
        break;
      case "bottom-right":
        Object.assign(style, {
          bottom: 0,
          right: 0
        });
        break;
      case "center-top":
        Object.assign(style, {
          top: 0,
          left: "50%",
          transform: "translate3d(-50%, 0, 0)"
        });
        break;
      case "center-bottom":
        Object.assign(style, {
          bottom: 0,
          left: "50%",
          transform: "translate3d(-50%, 0, 0)"
        });
        break;
      case "center-middle":
        Object.assign(style, {
          top: "50%",
          left: "50%",
          transform: "translate3d(-50%, -50%, 0)"
        });
        break;
      case "center-left":
        Object.assign(style, {
          top: "50%",
          left: 0,
          transform: "translate3d(0, -50%, 0)"
        });
        break;
      case "center-right":
        Object.assign(style, {
          top: "50%",
          right: 0,
          transform: "translate3d(0, -50%, 0)"
        });
        break;
      default:
        break;
    }

    return style;
  }}
`;
