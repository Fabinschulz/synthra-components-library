import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useState } from 'react';
import { SelectField } from './SelectField.component';
import { SelectChangeEvent } from '@mui/material';
import { selectMock } from './SelectField.mock';

type StoryProps = ComponentProps<typeof SelectField>;

const meta: Meta<StoryProps> = {
  title: 'UI/atoms/SelectField',
  component: SelectField,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  },
  argTypes: {
    label: { control: 'text' },
    items: { control: 'multi-select' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    variant: { control: 'radio', options: ['standard', 'filled', 'outlined'] },
    multiple: { control: 'boolean' },
    value: { control: 'text' }
  },
  args: selectMock
};

export default meta;

export const Template = ({ onChange, ...props }: StoryProps) => {
    const [value, setValue] = useState<string | string[] | null>(null);
  
    const handleChange = (event: SelectChangeEvent<unknown>) => {
      setValue(event.target.value as string | string[]);
    };
  
    return <SelectField value={value} onChange={handleChange} {...props} />;
  };



