import type { Preview } from '@storybook/nextjs';
import { Provider, dark, light } from '../src/theme';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Tema Synthra',
      toolbar: {
        title: 'Tema',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' }
        ],
        dynamicTitle: true
      }
    }
  },
  initialGlobals: {
    theme: 'light'
  },
  decorators: [
    (Story, context) => (
      <Provider theme={context.globals.theme === 'dark' ? dark : light}>
        <Story />
      </Provider>
    )
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      test: 'error'
    }
  }
};

export default preview;
