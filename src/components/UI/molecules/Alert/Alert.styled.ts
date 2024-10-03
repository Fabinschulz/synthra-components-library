import { ReactNode } from 'react';

export const alertBaseStyle = (message?: ReactNode) => ({
  width: '100%',

  '.MuiAlert-message': {
    flex: 1
  },

  '.MuiAlertTitle-root': {
    marginBottom: message ? 'initial' : 0
  }
});
