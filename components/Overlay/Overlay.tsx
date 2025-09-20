import type { MouseEvent } from "react";
import { useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";
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

  const overlayRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    onClose?.();
    onClick?.(e);
  };

  useImperativeHandle(ref, () => overlayRef.current as HTMLDivElement);

  useLayoutEffect(() => {
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

  useEffect(() => {
    const overlayElement = overlayRef.current;

    const handleTransitionEnd = (e: globalThis.TransitionEvent) => {
      if (open) return;

      if (e.propertyName === "opacity") {
        setIsUnmounted(true);
      }
    };

    overlayElement?.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      overlayElement?.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [open]);

  if (isUnmounted) {
    return null;
  }

  return createPortal(
    <OverlayWrapper>
      <StyledOverlay
        ref={overlayRef}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          backgroundColor: hideOverlay ? "rgba(0, 0, 0, 0)" : common.overlay
        }}
        transition={{
          duration: transitionDuration,
          ease: open ? "easeIn" : "easeOut"
        }}
        onClick={handleClick}
        {...props}
      />
      <OverlayContent placement={placement}>{children}</OverlayContent>
    </OverlayWrapper>,
    document.body
  );
}

export default Overlay;
