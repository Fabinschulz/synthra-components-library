import { AutocompleteProps } from './Autocomplete.component';
import { AutocompleteBaseProps } from './Autocomplete.interface';
import { fn } from 'storybook/test';

export const autocompletMock: AutocompleteProps = {
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
  skeleton: false
};

export const autocompletWithSkeleton: AutocompleteProps = {
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
  skeleton: true
};
