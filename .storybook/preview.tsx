import ThemeProvider from "@theme/ThemeProvider";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  globalTypes: {
    theme: {
      toolbar: {
        icon: "mirror",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" }
        ],
        dynamicTitle: true
      }
    }
  },
  argTypes: {
    css: {
      control: false
    }
  },
  decorators: [
    (Story, { globals: { theme } }) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ]
};

export default preview;
