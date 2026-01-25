import { Calendar, Search } from "lucide-react";

import TextField from "@components/TextField";

import type { TextFieldProps } from "@components/TextField";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof TextField> = {
  component: TextField,
  argTypes: {
    startIcon: {
      control: false
    },
    endIcon: {
      control: false
    }
  }
} satisfies Meta<TextFieldProps>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    variant: "outlined",
    size: "medium",
    placeholder: "Placeholder",
    disabled: false,
    fullWidth: false
  }
};

export const WithStartIcon: Story = {
  args: {
    variant: "outlined",
    size: "medium",
    startIcon: <Search />,
    placeholder: "Placeholder",
    disabled: false,
    fullWidth: false
  }
};

export const WithEndIcon: Story = {
  args: {
    variant: "outlined",
    size: "medium",
    endIcon: <Calendar />,
    placeholder: "Placeholder",
    disabled: false,
    fullWidth: false
  }
};
