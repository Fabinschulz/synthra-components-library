import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps, useState } from 'react';
import { expect, fn, screen, userEvent, waitFor, within } from 'storybook/test';
import { Button } from '@mui/material';
import Drawer from './Drawer.component';

type StoryProps = ComponentProps<typeof Drawer>;

const meta: Meta<StoryProps> = {
  title: 'UI/organisms/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  args: {
    title: 'Title',
    description: 'homus sum, et nihil humani a me alienum',
    anchor: 'left',
    toggleDrawer: false,
    children: <div>Drawer Content</div>,
    onClose: fn()
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Abrir drawer
        </Button>
        <Drawer
          {...args}
          open={open}
          onClose={() => {
            args.onClose?.();
            setOpen(false);
          }}
        />
      </>
    );
  }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Template: Story = {
  play: async ({ args, canvasElement }) => {
    await userEvent.click(within(canvasElement).getByRole('button', { name: 'Abrir drawer' }));

    const panel = await screen.findByRole('dialog', { name: 'Title' });
    await userEvent.click(within(panel).getByRole('button', { name: 'Fechar' }));

    await expect(args.onClose).toHaveBeenCalledOnce();
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  }
};

export const Right: Story = {
  args: {
    anchor: 'right',
    toggleDrawer: true
  }
};
