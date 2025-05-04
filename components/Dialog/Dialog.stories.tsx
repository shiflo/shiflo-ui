import { useState, useEffect } from "react";

import Dialog, { DialogProps } from "@components/Dialog";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dialog> = {
  component: Dialog
} satisfies Meta<DialogProps>;

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    children: "Dialog",
    open: true,
    onClose: () => {},
    transitionDuration: 200,
    maxWidth: "375px"
  },
  render: (args: DialogProps) => {
    const [isOpen, setIsOpen] = useState(args.open);

    const handleClose = () => setIsOpen(false);

    useEffect(() => {
      setIsOpen(args.open);
    }, [args.open]);

    return (
      <Dialog {...args} open={isOpen} onClose={handleClose}>
        {args.children}
      </Dialog>
    );
  }
};
