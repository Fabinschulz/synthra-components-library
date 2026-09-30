'use client';
import type { FunctionComponent } from 'react';
import type { ModalProps } from './Modal.interface';
import { Stack, useMediaQuery } from '@mui/material';
import {
  StyledDialog,
  StyledDialogContent,
  StyledDialogTitle,
  StyledIconButton,
  BoxIcon
} from './Modal.styled';
import { Typography } from '../../atoms';
import { activeTheme } from '@/utils';
import { CloseIcon } from '../../icons';

const theme = activeTheme();
const Modal: FunctionComponent<ModalProps> = ({
  title,
  description,
  icon,
  direction,
  children,
  align,
  open,
  sizeModal,
  onClose
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sizeSx = {
    width: '100%',
    maxWidth: sizeModal === 'large' ? 900 : sizeModal === 'medium' ? 646 : 460
  };

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      slotProps={{
        paper: {
          sx: sizeSx
        }
      }}
    >
      <StyledDialogTitle>
        <StyledIconButton aria-label="Fechar Modal" data-testId="close-button" onClick={onClose}>
          <CloseIcon />
        </StyledIconButton>
      </StyledDialogTitle>

      <StyledDialogContent>
        <Stack>
          <Stack direction={direction} sx={{ mb: 2 }}>
            {icon && <BoxIcon style={{ display: isMobile ? 'none' : 'flex' }}>{icon}</BoxIcon>}
            <Stack direction="column" sx={{ width: '100%' }}>
              {title && (
                <Typography variant="h3" sx={{ mb: 1, textAlign: align }}>
                  {title}
                </Typography>
              )}

              {description && (
                <Typography variant="body2" sx={{ textAlign: align }}>
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
