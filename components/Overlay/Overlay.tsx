import { useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";
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
  ref,
  ...props
}: OverlayProps) {
  const [isUnmounted, setIsUnmounted] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);

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
    <OverlayWrapper onClick={onClose}>
      <StyledOverlay
        ref={overlayRef}
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
