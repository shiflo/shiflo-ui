import { useEffect, useState } from "react";

import Switch, { SwitchProps } from "@components/Switch";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Switch> = {
  component: Switch,
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "medium", "large"]
    }
  }
} satisfies Meta<SwitchProps>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    size: "medium"
  },
  render: (args: SwitchProps) => {
    const [isChecked, setIsChecked] = useState(args.checked);
    const [isDisabled, setIsDisabled] = useState(args.disabled);

    const handleChange = (_: unknown, checked: boolean) => setIsChecked(checked);

    useEffect(() => {
      setIsChecked(args.checked || false);
    }, [args.checked]);

    useEffect(() => {
      setIsDisabled(args.disabled || false);
    }, [args.disabled]);

    return <Switch {...args} checked={isChecked} disabled={isDisabled} onChange={handleChange} />;
  }
};
