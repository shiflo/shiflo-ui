import { useState, useEffect } from "react";

import Button from "@components/Button";
import FPSMonitor from "@components/FPSMonitor";
import Icon from "@components/Icon";

import Snackbar from "@components/Snackbar";

import type { SnackbarProps } from "@components/Snackbar";

import type { Meta, StoryObj } from "@storybook/react-vite";

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
    transitionDuration: 0.3,
    autoHideDuration: 3000,
    disableAutoHide: false,
    maxWidth: "375px"
  },
  argTypes: {
    bottom: {
      control: "text"
    }
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
    transitionDuration: 0.3,
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
    transitionDuration: 0.3,
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

export const Performance: Story = {
  args: {
    children: "Snackbar",
    open: true,
    onClose: () => {},
    transitionDuration: 0.3,
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
      <>
        <Snackbar {...args} open={isOpen} onClose={handleClose}>
          {args.children}
        </Snackbar>
        <FPSMonitor trigger={isOpen} duration={(args.transitionDuration ?? 0.3) * 1000} />
      </>
    );
  }
};
