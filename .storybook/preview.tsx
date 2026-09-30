import type { Preview } from '@storybook/nextjs';
import { ThemeContext } from '../src/theme/ThemeContext';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeContext>
        <Story />
      </ThemeContext>
    )
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
