'use client';
import type { FunctionComponent } from 'react';
import type { ModalProps } from './Modal.interface';
import { useId } from 'react';
import { Stack, Typography } from '@mui/material';
import {
  StyledDialog,
  StyledDialogContent,
  StyledDialogTitle,
  StyledIconButton,
  BoxIcon
} from './Modal.styled';
import { CloseIcon } from '../../icons';

const modalWidths = { small: 460, medium: 646, large: 900 } as const;

const Modal: FunctionComponent<ModalProps> = ({
  title,
  description,
  icon,
  size = 'small',
  direction,
  children,
  align,
  open,
  sizeModal = 'small',
  onClose,
  closeLabel = 'Fechar'
}) => {
  const descriptionId = useId();

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      aria-describedby={description ? descriptionId : undefined}
      slotProps={{
        paper: {
          sx: { width: '100%', maxWidth: modalWidths[sizeModal] }
        }
      }}
    >
      {onClose && (
        <StyledIconButton aria-label={closeLabel} data-testid="close-button" onClick={onClose}>
          <CloseIcon />
        </StyledIconButton>
      )}

      <StyledDialogContent>
        <Stack>
          <Stack direction={direction} sx={{ mb: 2 }}>
            {icon && (
              <BoxIcon className={size} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                {icon}
              </BoxIcon>
            )}
            <Stack direction="column" sx={{ width: '100%' }}>
              {title && <StyledDialogTitle sx={{ textAlign: align }}>{title}</StyledDialogTitle>}

              {description && (
                <Typography id={descriptionId} variant="body2" sx={{ textAlign: align }}>
                  {description}
                </Typography>
              )}
            </Stack>
          </Stack>

          {children}
        </Stack>
      </StyledDialogContent>
    </StyledDialog>
  );
};

export default Modal;
