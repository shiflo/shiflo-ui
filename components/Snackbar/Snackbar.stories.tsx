import { useState, useEffect } from "react";

import Button from "@components/Button";
import Icon from "@components/Icon";
import Snackbar, { SnackbarProps } from "@components/Snackbar";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Snackbar> = {
  component: Snackbar,
  argTypes: {
    action: {
      control: false
    },
    startIcon: {
      control: false
    }
  }
} satisfies Meta<SnackbarProps>;

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
  args: {
    children: "Snackbar",
    open: true,
    onClose: () => {},
    transitionDuration: 200,
    autoHideDuration: 3000,
    disableAutoHide: false
  },
  render: (args: SnackbarProps) => {
    const [isOpen, setIsOpen] = useState(args.open);

    const handleClose = () => setIsOpen(false);

    useEffect(() => {
      setIsOpen(args.open);
    }, [args.open]);

    return (
      <Snackbar {...args} open={isOpen} onClose={handleClose}>
        {args.children}
      </Snackbar>
    );
  }
};

export const WithStartIcon: Story = {
  args: {
    children: "Snackbar",
    open: true,
    onClose: () => {},
    transitionDuration: 200,
    autoHideDuration: 3000,
    disableAutoHide: false
  },
  render: (args: SnackbarProps) => {
    const [isOpen, setIsOpen] = useState(args.open);

    const handleClose = () => setIsOpen(false);

    useEffect(() => {
      setIsOpen(args.open);
    }, [args.open]);

    return (
      <Snackbar
        {...args}
        open={isOpen}
        onClose={handleClose}
        startIcon={<Icon name={"CalendarLine"} color={"common.surface"} width={24} height={24} />}
      >
        {args.children}
      </Snackbar>
    );
  }
};

export const WithAction: Story = {
  args: {
    children: "Snackbar",
    open: true,
    onClose: () => {},
    transitionDuration: 200,
    autoHideDuration: 3000,
    disableAutoHide: false
  },
  render: (args: SnackbarProps) => {
    const [isOpen, setIsOpen] = useState(args.open);

    const handleClose = () => setIsOpen(false);

    useEffect(() => {
      setIsOpen(args.open);
    }, [args.open]);

    return (
      <Snackbar
        {...args}
        open={isOpen}
        onClose={handleClose}
        action={<Button onClick={handleClose}>Action</Button>}
      >
        {args.children}
      </Snackbar>
    );
  }
};
