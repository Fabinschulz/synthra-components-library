'use client';
import type { FunctionComponent } from 'react';
import type { ModalProps } from './Modal.interface';
import CloseIcon from '@mui/icons-material/Close';
import { Stack, useMediaQuery } from '@mui/material';
import {
  StyledDialog,
  StyledDialogContent,
  StyledDialogTitle,
  StyledIconButton,
  BoxIcon
} from './Modal.styled';
import { Body2, H3 } from '../../atoms';
import { activeTheme } from '@/utils';

const theme = activeTheme();
export const Modal: FunctionComponent<ModalProps> = ({
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

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      PaperProps={{
        sx: { width: sizeModal === 'large' ? 550 : 460, maxWidth: '100%' }
      }}
    >
      <StyledDialogTitle>
        <StyledIconButton aria-label="Fechar Modal" data-testid="close-button" onClick={onClose}>
          <CloseIcon />
        </StyledIconButton>
      </StyledDialogTitle>

      <StyledDialogContent>
        <Stack>
          <Stack direction={direction} mb={2}>
            {icon && <BoxIcon style={{ display: isMobile ? 'none' : 'flex' }}>{icon}</BoxIcon>}
            <Stack direction="column" sx={{ width: '100%' }}>
              {title && (
                <H3 lineHeight="24px" mb={1} textAlign={align}>
                  {title}
                </H3>
              )}

              {description && (
                <Body2 lineHeight="19px" textAlign={align}>
                  {description}
                </Body2>
              )}
            </Stack>
          </Stack>

          {children}
        </Stack>
      </StyledDialogContent>
    </StyledDialog>
  );
};
