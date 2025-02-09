import { IconButton, Tooltip } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FunctionComponent } from 'react';

interface JumpButtonProps {
  icon: JSX.Element;
  onClick: () => void;
  disabled: boolean;
  tooltip: string;
  sx: SxProps<Theme>;
}

const JumpButton: FunctionComponent<JumpButtonProps> = ({
  icon,
  onClick,
  disabled,
  tooltip,
  sx
}) => {
  return (
    <Tooltip title={tooltip}>
      <IconButton sx={sx} onClick={onClick} disabled={disabled} disableRipple>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default JumpButton;
