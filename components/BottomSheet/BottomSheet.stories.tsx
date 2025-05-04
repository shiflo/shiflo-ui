import { useState, useEffect } from "react";

import BottomSheet, { BottomSheetProps } from "@components/BottomSheet";

import type { Meta, StoryObj } from "@storybook/react";

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
    transitionDuration: 200,
    hideDragHandleBar: false,
    hideOverlay: true,
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
