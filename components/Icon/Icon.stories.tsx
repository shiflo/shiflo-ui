import * as Svgs from "@assets/icons";

import Icon, { IconProps } from "@components/Icon";
import light from "@theme/light";

import getObjectPaths from "@utils/getObjectPaths";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Icon> = {
  component: Icon,
  argTypes: {
    name: {
      control: "select",
      options: Object.keys(Svgs)
    },
    color: {
      control: "select",
      options: getObjectPaths(light.palette)
    }
  }
} satisfies Meta<IconProps>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: "CalendarsSolid",
    width: 24,
    height: 24,
    color: "primary.main"
  }
};
