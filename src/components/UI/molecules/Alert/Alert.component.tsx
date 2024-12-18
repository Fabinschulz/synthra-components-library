import type { FunctionComponent } from 'react';
import type { IAlertProps } from './Alert.interface';
import { AlertTitle, Alert as MuiAlert } from '@mui/material';
import { alertBaseStyle } from './Alert.styled';
import { activeTheme } from '@/utils';

const theme = activeTheme();
const Alert: FunctionComponent<IAlertProps> = ({ description, title, type, ...props }) => {
  return (
    <MuiAlert
      {...props}
      sx={{ fontSize: theme.typography.h6, ...alertBaseStyle(description) }}
      className={`${type}Alert`}
      data-testId={`${type}-alert`}
      severity={type}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {description}
    </MuiAlert>
  );
};

export default Alert;
