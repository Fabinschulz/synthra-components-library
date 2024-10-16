import type { Preview } from '@storybook/react';
import {withThemeProvider} from 'storybook-addon-theme-provider';
import { ThemeContext } from '../src/theme/ThemeContext';

const preview: Preview = {
  decorators:[
    withThemeProvider(ThemeContext),
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
