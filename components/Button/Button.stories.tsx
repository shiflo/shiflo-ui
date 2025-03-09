import Button, { ButtonProps } from "@components/Button";
import Icon from "@components/Icon";

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
    },
    startIcon: {
      control: false
    },
    endIcon: {
      control: false
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

export const WithStartIcon: Story = {
  args: {
    children: "Button",
    variant: "filled",
    size: "medium",
    color: "primary",
    disabled: false,
    startIcon: <Icon name={"CalendarsSolid"} />
  }
};

export const WithEndIcon: Story = {
  args: {
    children: "Button",
    variant: "filled",
    size: "medium",
    color: "primary",
    disabled: false,
    endIcon: <Icon name={"CalendarsSolid"} />
  }
};

export const IconOnly: Story = {
  args: {
    variant: "filled",
    size: "medium",
    color: "primary",
    disabled: false,
    startIcon: <Icon name={"CalendarsSolid"} />
  }
};
