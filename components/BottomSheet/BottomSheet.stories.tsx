import { useState, useEffect } from "react";

import BottomSheet from "@components/BottomSheet";

import FPSMonitor from "@components/FPSMonitor";

import type { BottomSheetProps } from "@components/BottomSheet";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof BottomSheet> = {
  component: BottomSheet
} satisfies Meta<BottomSheetProps>;

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  args: {
    children: "BottomSheet",
    open: true,
    onClose: () => {},
    transitionDuration: 0.2,
    hideDragHandleBar: false,
    hideOverlay: false,
    maxWidth: "375px"
  },
  render: (args: BottomSheetProps) => {
    const [isOpen, setIsOpen] = useState(args.open);

    const handleClose = () => setIsOpen(false);

    useEffect(() => {
      setIsOpen(args.open);
    }, [args.open]);

    return (
      <BottomSheet {...args} open={isOpen} onClose={handleClose}>
        {args.children}
      </BottomSheet>
    );
  }
};

export const Performance: Story = {
  args: {
    children: "BottomSheet",
    open: true,
    onClose: () => {},
    transitionDuration: 0.2,
    hideDragHandleBar: false,
    hideOverlay: false,
    maxWidth: "375px"
  },
  render: (args: BottomSheetProps) => {
    const [isOpen, setIsOpen] = useState(args.open);

    const handleClose = () => setIsOpen(false);

    useEffect(() => {
      setIsOpen(args.open);
    }, [args.open]);

    return (
      <>
        <BottomSheet {...args} open={isOpen} onClose={handleClose}>
          {args.children}
        </BottomSheet>
        <FPSMonitor trigger={isOpen} duration={(args.transitionDuration ?? 0.2) * 1000} />
      </>
    );
  }
};
