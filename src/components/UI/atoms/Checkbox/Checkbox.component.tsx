'use client';
import type { FunctionComponent } from 'react';
import type { CheckboxProps } from './Checkbox.interface';
import { FormGroup } from '@mui/material';
import { StyledCheckbox, StyledFormControlLabel } from './Checkbox.styled';

const Checkbox: FunctionComponent<CheckboxProps> = (props) => {
  const { label, name, formControlSX, ...rest } = props;

  return (
    <FormGroup>
      <StyledFormControlLabel
        sx={{ ...formControlSX }}
        control={<StyledCheckbox {...rest} />}
        label={label}
        data-testId={`${name}-chekbox`}
        name={name}
      />
    </FormGroup>
  );
};
export default Checkbox;
