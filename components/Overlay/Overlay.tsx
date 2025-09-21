import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { useTheme } from "@emotion/react";

import { OverlayWrapper, StyledOverlay, OverlayContent } from "@components/Overlay/Overlay.styles";

import type { OverlayProps } from "@components/Overlay/Overlay.typing";

function Overlay({
  children,
  open,
  onClose,
  transitionDuration = 0.2,
  placement,
  ref,
  onClick,
  hideOverlay,
  ...props
}: OverlayProps) {
  const {
    palette: { common }
  } = useTheme();

  const [isUnmounted, setIsUnmounted] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    onClose?.();
    onClick?.(e);
  };

  const handleAnimationComplete = () => {
    if (open) return;

    setIsUnmounted(true);
  };

  useEffect(() => {
    let rafId: number | undefined;

    if (open) {
      setIsUnmounted(false);

      rafId = requestAnimationFrame(() => {
        setIsOpen(true);
      });
    } else {
      setIsOpen(false);
    }

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [open, transitionDuration]);

  if (isUnmounted) {
    return null;
  }

  return createPortal(
    <OverlayWrapper>
      <StyledOverlay
        initial={{ opacity: 0, backgroundColor: hideOverlay ? "rgba(0, 0, 0, 0)" : common.overlay }}
        animate={{
          opacity: isOpen ? 1 : 0,
          backgroundColor: hideOverlay ? "rgba(0, 0, 0, 0)" : common.overlay
        }}
        transition={{
          type: "spring",
          duration: transitionDuration,
          bounce: 0.2
        }}
        onAnimationComplete={handleAnimationComplete}
        onClick={handleClick}
        {...props}
      />
      <OverlayContent placement={placement}>{children}</OverlayContent>
    </OverlayWrapper>,
    document.body
  );
}

export default Overlay;
