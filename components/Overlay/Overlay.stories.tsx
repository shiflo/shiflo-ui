import { useEffect, useState } from "react";

import Overlay, { OverlayProps } from "@components/Overlay";

import type { Meta, StoryObj } from "@storybook/react";

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
    }
  },
  args: {
    open: true,
    onClose: () => {},
    transitionDuration: 200,
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
