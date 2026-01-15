import type { MouseEvent } from "react";
import { useEffect, useState, useImperativeHandle, useRef } from "react";

import {
  StyledBottomSheet,
  DragHandleBarWrapper,
  DragHandleBar
} from "@components/BottomSheet/BottomSheet.styles";

import Overlay from "@components/Overlay/Overlay";

import type { BottomSheetProps } from "@components/BottomSheet/BottomSheet.typing";

function BottomSheet({
  open,
  onClose,
  children,
  transitionDuration = 200,
  maxWidth = "375px",
  onClick,
  ref,
  hideDragHandleBar,
  hideOverlay,
  disablePortal,
  style,
  ...props
}: BottomSheetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sheetRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const dragHandleBarWrapperRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startYRef = useRef(0);
  const currentYRef = useRef(0);
  const initialHeightRef = useRef(0);
  const lastVelocityRef = useRef(0);
  const lastTimeRef = useRef(0);
  const dragThresholdRef = useRef(0.25);

  useImperativeHandle(ref, () => sheetRef.current as HTMLDivElement);

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

  useEffect(() => {
    const sheetElement = sheetRef.current;
    const overlayElement = overlayRef.current;

    const startDrag = (clientY: number) => {
      if (!sheetElement) return;

      if (sheetElement.scrollTop > 0) {
        return;
      }

      isDraggingRef.current = true;
      startYRef.current = clientY;
      currentYRef.current = clientY;
      initialHeightRef.current = sheetElement.offsetHeight;
      lastTimeRef.current = Date.now();

      sheetElement.style.transition = "none";
      sheetElement.style.cursor = "grabbing";

      if (overlayElement) {
        overlayElement.style.transition = "none";
      }

      if (dragHandleBarWrapperRef.current) {
        dragHandleBarWrapperRef.current.style.cursor = "grabbing";
      }
    };

    const drag = (clientY: number) => {
      if (!sheetElement || !isDraggingRef.current) return;

      const deltaY = clientY - startYRef.current;

      if (deltaY < 0) return;

      currentYRef.current = clientY;

      // 속도 계산
      const now = Date.now();
      const timeDelta = now - lastTimeRef.current;
      if (timeDelta > 0) {
        const prevY = currentYRef.current;
        lastVelocityRef.current = (clientY - prevY) / timeDelta;
        lastTimeRef.current = now;
      }

      if (overlayElement) {
        overlayElement.style.opacity = `${Math.max(0, 1 - deltaY / (initialHeightRef.current * 2))}`;
      }

      sheetElement.style.transform = `translate3d(0, ${deltaY}px, 0)`;
    };

    const endDrag = () => {
      if (!sheetElement || !isDraggingRef.current) return;

      isDraggingRef.current = false;
      sheetElement.style.cursor = "default";

      if (dragHandleBarWrapperRef.current) {
        dragHandleBarWrapperRef.current.style.cursor = "grab";
      }

      const deltaY = currentYRef.current - startYRef.current;
      const threshold = initialHeightRef.current * dragThresholdRef.current;

      sheetElement.style.transition = `transform ${transitionDuration}ms ease-out`;

      if (overlayElement) {
        overlayElement.style.transition = `opacity ${transitionDuration}ms ease-out`;
      }

      // 속도가 빠르거나 충분히 내려왔으면 닫기
      if (deltaY > threshold || (lastVelocityRef.current > 0.5 && lastVelocityRef.current > 0)) {
        sheetElement.style.transform = `translate3d(0, 200%, 0)`;
        if (overlayElement) {
          overlayElement.style.opacity = "0";
        }
        onClose?.();
      } else {
        sheetElement.style.transform = "translate3d(0, 0, 0)";
        if (overlayElement) {
          overlayElement.style.opacity = "1";
        }
      }
    };

    const handleMouseDown = (e: globalThis.MouseEvent) => startDrag(e.clientY);

    const handleMouseMove = (e: globalThis.MouseEvent) => drag(e.clientY);

    const handleTouchStart = (e: globalThis.TouchEvent) => startDrag(e.touches[0].clientY);

    const handleTouchMove = (e: globalThis.TouchEvent) => drag(e.touches[0].clientY);

    sheetElement?.addEventListener("mousedown", handleMouseDown);
    sheetElement?.addEventListener("mousemove", handleMouseMove);
    sheetElement?.addEventListener("mouseup", endDrag);
    sheetElement?.addEventListener("mouseleave", endDrag);
    sheetElement?.addEventListener("touchstart", handleTouchStart);
    sheetElement?.addEventListener("touchmove", handleTouchMove);
    sheetElement?.addEventListener("touchend", endDrag);
    sheetElement?.addEventListener("touchcancel", endDrag);

    return () => {
      sheetElement?.removeEventListener("mousedown", handleMouseDown);
      sheetElement?.removeEventListener("mousemove", handleMouseMove);
      sheetElement?.removeEventListener("mouseup", endDrag);
      sheetElement?.removeEventListener("mouseleave", endDrag);
      sheetElement?.removeEventListener("touchstart", handleTouchStart);
      sheetElement?.removeEventListener("touchmove", handleTouchMove);
      sheetElement?.removeEventListener("touchend", endDrag);
      sheetElement?.removeEventListener("touchcancel", endDrag);
    };
  }, [isOpen, onClose, transitionDuration]);

  return (
    <Overlay
      ref={overlayRef}
      open={open}
      onClose={onClose}
      transitionDuration={transitionDuration}
      placement={"center-bottom"}
      disablePortal={disablePortal}
      css={
        !hideOverlay
          ? undefined
          : {
              pointerEvents: "none",
              backgroundColor: "transparent !important"
            }
      }
    >
      <StyledBottomSheet
        ref={sheetRef}
        ease={open ? "in" : "out"}
        transitionDuration={transitionDuration}
        maxWidth={maxWidth}
        onClick={handleClick}
        {...props}
        style={{
          transform: `translate3d(0, ${isOpen ? "0" : "200%"}, 0)`,
          ...style
        }}
      >
        {!hideDragHandleBar && (
          <DragHandleBarWrapper ref={dragHandleBarWrapperRef}>
            <DragHandleBar />
          </DragHandleBarWrapper>
        )}
        {children}
      </StyledBottomSheet>
    </Overlay>
  );
}

export default BottomSheet;
