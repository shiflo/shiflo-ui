import { useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";

import { createPortal } from "react-dom";

import {
  StyledSnackbar,
  Content,
  StartAdornment,
  Action
} from "@components/Snackbar/Snackbar.styles";

import { SnackbarProps } from "@components/Snackbar/Snackbar.typing";

function Snackbar({
  children,
  open,
  onClose,
  transitionDuration = 200,
  style,
  ref,
  startIcon,
  action,
  autoHideDuration = 3000,
  disableAutoHide,
  ...props
}: SnackbarProps) {
  const [isUnmounted, setIsUnmounted] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const snackbarRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useImperativeHandle(ref, () => snackbarRef.current as HTMLDivElement);

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
    const snackbarElement = snackbarRef.current;

    const handleTransitionEnd = (e: globalThis.TransitionEvent) => {
      if (open) return;

      if (e.propertyName === "opacity") {
        setIsUnmounted(true);
      }
    };

    snackbarElement?.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      snackbarElement?.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [open]);

  useEffect(() => {
    if (disableAutoHide || !isOpen) return;

    timerRef.current = setTimeout(() => {
      onClose?.();
    }, autoHideDuration);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [disableAutoHide, autoHideDuration, isOpen, onClose]);

  if (isUnmounted) {
    return null;
  }

  return createPortal(
    <StyledSnackbar
      ref={snackbarRef}
      transitionDuration={transitionDuration}
      ease={open ? "in" : "out"}
      style={{
        opacity: isOpen ? 1 : 0,
        transform: isOpen
          ? "translate3d(-50%, 0, 0) scale(1)"
          : "translate3d(-50%, 0, 0) scale(0.97)",
        ...style
      }}
      {...props}
    >
      {startIcon && <StartAdornment>{startIcon}</StartAdornment>}
      <Content>{children}</Content>
      {action && <Action>{action}</Action>}
    </StyledSnackbar>,
    document.body
  );
}

export default Snackbar;
