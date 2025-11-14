import { useState, useEffect } from "react";

import Dialog from "@components/Dialog";

import FPSMonitor from "@components/FPSMonitor";

import type { DialogProps } from "@components/Dialog";

import type { Meta, StoryObj } from "@storybook/react-vite";

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

export const Performance: Story = {
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
      <>
        <Dialog {...args} open={isOpen} onClose={handleClose}>
          {args.children}
        </Dialog>
        <FPSMonitor trigger={isOpen} duration={args.transitionDuration} />
      </>
    );
  }
};
