import Icon from "@components/Icon";
import TextField, { TextFieldProps } from "@components/TextField";

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
    startIcon: <Icon name={"Grid2Solid"} />,
    placeholder: "Placeholder",
    disabled: false,
    fullWidth: false
  }
};

export const WithEndIcon: Story = {
  args: {
    variant: "outlined",
    size: "medium",
    endIcon: <Icon name={"CalendarLine"} />,
    placeholder: "Placeholder",
    disabled: false,
    fullWidth: false
  }
};
