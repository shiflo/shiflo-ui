import Tag from "@components/Tag";

import type { TagProps } from "@components/Tag";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Tag> = {
  component: Tag
} satisfies Meta<TagProps>;

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "Tag",
    color: "primary"
  }
};
