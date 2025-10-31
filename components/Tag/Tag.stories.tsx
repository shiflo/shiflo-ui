import Tag from "@components/Tag";

import light from "@theme/light";

import getObjectPaths from "@utils/getObjectPaths";

import type { TagProps } from "@components/Tag";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Tag> = {
  component: Tag,
  argTypes: {
    color: {
      control: "select",
      options: getObjectPaths(light.palette)
    },
    textColor: {
      control: "select",
      options: getObjectPaths(light.palette)
    }
  }
} satisfies Meta<TagProps>;

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "Tag",
    color: "primary.main",
    textColor: "common.surface"
  }
};
