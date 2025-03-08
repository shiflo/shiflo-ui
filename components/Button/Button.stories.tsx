import Button from "./Button";

import { ButtonProps } from "./Button.typing";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      control: "radio",
      options: ["filled", "ghost", "text"]
    },
    size: {
      control: "radio",
      options: ["xSmall", "small", "medium", "large"]
    },
    color: {
      control: "radio",
      options: ["primary", "secondary"]
    }
  }
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "filled",
    size: "medium",
    color: "primary",
    disabled: false
  }
};
