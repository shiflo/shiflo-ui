import light from "@theme/light";

import Typography from "./Typography";

import { TypographyProps } from "./Typography.typing";

import getObjectPaths from "../../utils/getObjectPaths";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: Object.keys(light.typography)
    },
    color: {
      control: "select",
      options: getObjectPaths(light.palette)
    }
  }
} satisfies Meta<TypographyProps>;

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: "Typography",
    variant: "body1",
    fontWeight: 400,
    color: "primary.main",
    noWrap: false,
    lineClamp: 0
  }
};
