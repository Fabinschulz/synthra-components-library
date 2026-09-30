import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps, useState } from 'react';
import { expect, fn, screen, userEvent, waitFor, within } from 'storybook/test';
import { Button } from '@mui/material';
import Modal from './Modal.component';

type StoryProps = ComponentProps<typeof Modal>;

const meta: Meta<StoryProps> = {
  title: 'UI/organisms/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    title: 'Excluir registro',
    description: 'Esta ação não pode ser desfeita.',
    children: 'Conteúdo do modal',
    onClose: fn()
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Abrir modal
        </Button>
        <Modal
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
    await userEvent.click(within(canvasElement).getByRole('button', { name: 'Abrir modal' }));

    const dialog = await screen.findByRole('dialog', { name: 'Excluir registro' });
    await expect(dialog).toHaveAccessibleDescription('Esta ação não pode ser desfeita.');

    await userEvent.click(within(dialog).getByRole('button', { name: 'Fechar' }));
    await expect(args.onClose).toHaveBeenCalledOnce();
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  }
};

export const Large: Story = {
  args: {
    sizeModal: 'large',
    align: 'center'
  }
};
