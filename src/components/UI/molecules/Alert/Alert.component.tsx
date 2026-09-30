'use client';
import type { FunctionComponent } from 'react';
import type { AlertProps } from './Alert.interface';
import { AlertTitle, Alert as MuiAlert } from '@mui/material';
import clsx from 'clsx';
import { alertBaseStyle } from './Alert.styled';

const Alert: FunctionComponent<AlertProps> = ({
  description,
  title,
  severity = 'info',
  className,
  sx,
  children,
  ...props
}) => {
  const content = description ?? children;

  return (
    <MuiAlert
      data-testid={`${severity}-alert`}
      {...props}
      severity={severity}
      className={clsx(`${severity}Alert`, className)}
      sx={[alertBaseStyle(content), ...(Array.isArray(sx) ? sx : [sx])]}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {content}
    </MuiAlert>
  );
};

export default Alert;
