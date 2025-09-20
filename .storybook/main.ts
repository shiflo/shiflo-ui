import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-onboarding", "@chromatic-com/storybook", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  }
};
export default config;
