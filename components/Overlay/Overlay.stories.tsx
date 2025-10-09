import { useEffect, useState } from "react";

import FPSMonitor from "@components/FPSMonitor";

import Overlay from "@components/Overlay";

import type { OverlayProps } from "@components/Overlay";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Overlay> = {
  component: Overlay
} satisfies Meta<OverlayProps>;

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Default: Story = {
  argTypes: {
    placement: {
      control: "select",
      options: [
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
        "center-top",
        "center-bottom",
        "center-middle",
        "center-left",
        "center-right"
      ]
    },
    transitionDuration: {
      control: { type: "number", min: 0.1, max: 1, step: 0.1 },
      description: "애니메이션 지속 시간 (초)"
    }
  },
  args: {
    open: true,
    onClose: () => {},
    transitionDuration: 0.3,
    placement: "top-left"
  },
  render: (args: OverlayProps) => {
    const [isOpen, setIsOpen] = useState(args.open);

    const handleClose = () => setIsOpen(false);

    useEffect(() => {
      setIsOpen(args.open);
    }, [args.open]);

    return <Overlay {...args} open={isOpen} onClose={handleClose} />;
  }
};

export const Performance: Story = {
  args: {
    open: true,
    onClose: () => {},
    transitionDuration: 0.3,
    placement: "top-left"
  },
  render: (args: OverlayProps) => {
    const [isOpen, setIsOpen] = useState(args.open);

    const handleClose = () => setIsOpen(false);

    useEffect(() => {
      setIsOpen(args.open);
    }, [args.open]);

    return (
      <>
        <Overlay {...args} open={isOpen} onClose={handleClose} />
        <FPSMonitor trigger={isOpen} duration={(args.transitionDuration ?? 0.3) * 1000} />
      </>
    );
  }
};
