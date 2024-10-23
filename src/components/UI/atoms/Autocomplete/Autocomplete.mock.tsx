import { AutocompleteBaseProps } from './Autocomplete.interface';
import { fn } from '@storybook/test';

export const autocompletMock: AutocompleteBaseProps = {
  name: 'autocomplete',
  required: false,
  options: [
    { label: 'Opção 1', value: '1' },
    { label: 'Opção 2', value: '2' },
    { label: 'Opção 3', value: '3' }
  ],
  label: 'Autocomplete',
  value: { label: 'Opção 1', value: '1' },
  onChange: fn(),
  renderInput: () => <></>
};
