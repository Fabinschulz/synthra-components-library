import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps } from 'react';
import Typography from './Typography.component';
import { typographyArgs } from './Typography.mock';
import { fonts, fontWeights } from '@/theme';

type StoryProps = ComponentProps<typeof Typography>;

const meta: Meta<StoryProps> = {
  title: 'UI/atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'xg',
        'xxxl',
        'xxl',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption'
      ],
      control: { type: 'select' },
      description: 'Variações do texto'
    },
    color: {
      options: [
        'initial',
        'inherit',
        'primary',
        'secondary',
        'success',
        'error',
        'info',
        'warning',
        'textPrimary',
        'textSecondary'
      ],
      control: { type: 'select' },
      description: 'Cores do texto'
    },
    align: {
      options: ['inherit', 'left', 'center', 'right', 'justify'],
      control: { type: 'select' },
      description: 'Alinhamento do texto'
    },
    children: {
      description: 'Conteúdo do texto'
    },
    fontFamily: {
      options: [fonts.default, fonts.code, fonts.lato],
      control: { type: 'select' },
      description: 'Família da fonte'
    },
    fontWeight: {
      options: [
        fontWeights.regular,
        fontWeights.medium,
        fontWeights.semibold,
        fontWeights.bold,
        fontWeights.extrabold,
        fontWeights.black
      ],
      control: { type: 'select' },
      description: 'Peso da fonte'
    }
  },
  args: {
    children: 'Texto do componente'
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  args: typographyArgs
};
