import type { MouseEvent } from "react";
import { useEffect, useState, useImperativeHandle, useRef } from "react";

import {
  StyledBottomSheet,
  DragHandleBarWrapper,
  DragHandleBar
} from "@components/BottomSheet/BottomSheet.styles";

import Overlay from "@components/Overlay/Overlay";

import type { BottomSheetProps } from "@components/BottomSheet/BottomSheet.typing";
import type { PanInfo } from "motion/react";

function BottomSheet({
  open,
  onClose,
  children,
  transitionDuration = 0.2,
  maxWidth = "375px",
  onClick,
  ref,
  hideDragHandleBar,
  hideOverlay,
  style,
  dragThreshold = 100,
  ...props
}: BottomSheetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sheetRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const dragHandleBarWrapperRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => sheetRef.current as HTMLDivElement);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (typeof onClick === "function") {
      onClick(e);
    }
  };

  const handleDragEnd = (_event: unknown, info: PanInfo) => {
    const { offset, velocity } = info;

    // 아래로 드래그한 거리가 임계값을 넘거나, 아래로의 속도가 충분히 빠른 경우 닫기
    if (offset.y > dragThreshold || velocity.y > 500) {
      if (typeof onClose === "function") {
        onClose();
      }
    }
    // 그렇지 않으면 원래 위치로 돌아가기 (dragSnapToOrigin이 처리)
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
      placement={"center-bottom"}
      hideOverlay={hideOverlay}
    >
      <StyledBottomSheet
        ref={sheetRef}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.2 }}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
        maxWidth={maxWidth}
        onClick={handleClick}
        initial={{ y: "200%" }}
        animate={{
          y: isOpen ? 0 : "200%"
        }}
        exit={{ y: "200%" }}
        transition={{
          type: "spring",
          duration: transitionDuration,
          bounce: 0.2
        }}
        style={style}
        {...props}
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
