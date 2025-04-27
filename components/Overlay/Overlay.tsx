import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { StyledOverlay, OverlayWrapper, OverlayContent } from "@components/Overlay/Overlay.styles";
import { OverlayProps } from "@components/Overlay/Overlay.typing";

function Overlay({
  children,
  open,
  onClose,
  transitionDuration = 200,
  placement,
  style,
  ...props
}: OverlayProps) {
  const [isUnmounted, setIsUnmounted] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let animationFrameId: number | undefined;
    let timeoutId: number | undefined;

    if (open) {
      setIsUnmounted(false);

      animationFrameId = requestAnimationFrame(() => {
        setIsOpen(true);
      });
    } else {
      setIsOpen(false);

      timeoutId = setTimeout(() => {
        setIsUnmounted(true);
      }, transitionDuration);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [open, transitionDuration]);

  if (isUnmounted) {
    return null;
  }

  return createPortal(
    <OverlayWrapper onClick={onClose}>
      <StyledOverlay
        transitionDuration={transitionDuration}
        ease={open ? "in" : "out"}
        style={{
          opacity: isOpen ? 1 : 0,
          ...style
        }}
        {...props}
      />
      <OverlayContent placement={placement}>{children}</OverlayContent>
    </OverlayWrapper>,
    document.body
  );
}

export default Overlay;
