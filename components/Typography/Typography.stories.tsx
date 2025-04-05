import Typography, { BaseTypographyProps } from "@components/Typography";
import light from "@theme/light";

import radius from "@theme/radius";
import spacing from "@theme/spacing";

import getObjectPaths from "@utils/getObjectPaths";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: Object.keys(light.typography)
    },
    m: {
      control: "select",
      options: Object.keys(spacing)
    },
    mt: {
      control: "select",
      options: Object.keys(spacing)
    },
    mb: {
      control: "select",
      options: Object.keys(spacing)
    },
    ml: {
      control: "select",
      options: Object.keys(spacing)
    },
    mr: {
      control: "select",
      options: Object.keys(spacing)
    },
    p: {
      control: "select",
      options: Object.keys(spacing)
    },
    pt: {
      control: "select",
      options: Object.keys(spacing)
    },
    pb: {
      control: "select",
      options: Object.keys(spacing)
    },
    pl: {
      control: "select",
      options: Object.keys(spacing)
    },
    pr: {
      control: "select",
      options: Object.keys(spacing)
    },
    border: {
      control: "text"
    },
    borderTop: {
      control: "text"
    },
    borderBottom: {
      control: "text"
    },
    borderRight: {
      control: "text"
    },
    borderLeft: {
      control: "text"
    },
    brtl: {
      control: "select",
      options: Object.keys(radius)
    },
    brtr: {
      control: "select",
      options: Object.keys(radius)
    },
    brml: {
      control: "select",
      options: Object.keys(radius)
    },
    brmr: {
      control: "select",
      options: Object.keys(radius)
    },
    borderColor: {
      control: "select",
      options: getObjectPaths(light.palette)
    },
    color: {
      control: "select",
      options: getObjectPaths(light.palette)
    }
  }
} satisfies Meta<BaseTypographyProps>;

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: "Typography",
    variant: "body1",
    fontWeight: 400,
    display: "flex",
    flex: "auto",
    flexBasis: "auto",
    flexDirection: "column",
    flexFlow: "wrap",
    flexGrow: "inherit",
    flexShrink: "inherit",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "primary.main",
    noWrap: false,
    lineClamp: 0,
    textAlign: "left"
  }
};
