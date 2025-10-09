import { useEffect, useRef, useState } from "react";

import { createPortal } from "react-dom";

import {
  StyledSnackbar,
  Content,
  StartAdornment,
  Action
} from "@components/Snackbar/Snackbar.styles";

import type { SnackbarProps } from "@components/Snackbar/Snackbar.typing";

function Snackbar({
  children,
  open,
  onClose,
  transitionDuration = 0.3,
  style,
  ref,
  startIcon,
  action,
  maxWidth = "375px",
  autoHideDuration = 3000,
  disableAutoHide,
  ...props
}: SnackbarProps) {
  const [isUnmounted, setIsUnmounted] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

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

  const handleAnimationComplete = () => {
    if (open) return;

    setIsUnmounted(true);
  };

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
      transitionDuration={transitionDuration}
      maxWidth={maxWidth}
      onAnimationComplete={handleAnimationComplete}
      initial={{
        x: "-50%",
        scale: 0.97,
        opacity: 0
      }}
      animate={{
        x: "-50%",
        scale: isOpen ? 1 : 0.97,
        opacity: isOpen ? 1 : 0
      }}
      transition={{
        type: "spring",
        duration: transitionDuration,
        bounce: 0.2
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
