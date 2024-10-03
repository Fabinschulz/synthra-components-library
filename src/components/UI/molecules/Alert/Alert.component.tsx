import type { FunctionComponent } from 'react';
import type { IAlertProps } from './Alert.interface';
import { AlertTitle, Alert as MuiAlert, useTheme } from '@mui/material';
import { alertBaseStyle } from './Alert.styled';

export const Alert: FunctionComponent<IAlertProps> = ({ description, title, type, ...props }) => {
  const theme = useTheme();
  return (
    <MuiAlert
      {...props}
      sx={{ fontSize: theme.typography.h6, ...alertBaseStyle(description) }}
      className={`${type}Alert`}
      data-testid={`${type}Alert`}
      severity={type}
    >
      <AlertTitle>{title}</AlertTitle>
      {description}
    </MuiAlert>
  );
};
