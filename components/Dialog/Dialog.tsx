import { useEffect, useState, useRef, MouseEvent } from "react";

import { StyledDialog } from "@components/Dialog/Dialog.styles";
import { DialogProps } from "@components/Dialog/Dialog.typing";
import Overlay from "@components/Overlay/Overlay";

function Dialog({
  open,
  onClose,
  children,
  transitionDuration = 200,
  onClick,
  style,
  maxWidth = "375px",
  ...props
}: DialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (typeof onClick === "function") {
      onClick(e);
    }
  };

  useEffect(() => {
    let rafId: number | undefined;

    if (open) {
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
  }, [open]);

  return (
    <Overlay
      ref={overlayRef}
      open={open}
      onClose={onClose}
      transitionDuration={transitionDuration}
      placement={"center-middle"}
    >
      <StyledDialog
        ease={open ? "in" : "out"}
        transitionDuration={transitionDuration}
        maxWidth={maxWidth}
        onClick={handleClick}
        {...props}
        style={{
          transform: `scale(${isOpen ? 1 : 0.9})`,
          opacity: isOpen ? 1 : 0,
          ...style
        }}
      >
        {children}
      </StyledDialog>
    </Overlay>
  );
}

export default Dialog;
