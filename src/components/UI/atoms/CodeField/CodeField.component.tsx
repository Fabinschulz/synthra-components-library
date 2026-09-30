'use client';
import { Stack, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import React, { useId } from 'react';
import ReactCodeInput, { ReactCodeInputProps } from 'react-code-input';
import { getObjectPropertyValue } from '@/utils';
import { useFormContext } from '@/contexts';
import { CodeFieldProps } from './CodeField.interface';

interface IFieldCode {
  handleChange: (event: string) => void;
  props: ReactCodeInputProps;
  fields: number;
}

const CodeFieldRoot = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0
  },
  '& input[type="number"]': {
    appearance: 'textfield'
  },
  '& input[type="number"]:nth-last-of-type(1)': {
    margin: 0
  },
  '& input[type="number"]:nth-last-of-type(3)': {
    marginLeft: '40px !important'
  },
  '& input:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '2px'
  }
}));

const FieldCode = ({ handleChange, fields, props }: IFieldCode) => {
  return <ReactCodeInput onChange={handleChange} type="number" fields={fields} {...props} />;
};

const CodeField: React.FC<CodeFieldProps> = ({ name, toggle, fields = 6 }) => {
  const theme = useTheme();
  const errorId = useId();
  const { setValue, validationErrors } = useFormContext();
  let error = validationErrors && getObjectPropertyValue(name, validationErrors)?.message;

  const onChangeField = (value: string) => {
    if (value.length === 0 || !value) return;
    setValue(name, value);
  };

  const dinamicProps: ReactCodeInputProps = {
    inputStyle: {
      fontSize: '24px',
      fontWeight: '700',
      textAlign: 'center',
      margin: toggle ? '5px 10px 10px 0px' : '5px 30px 10px 0px',
      width: '60px',
      height: '60px',
      border: `1px solid ${error ? theme.palette.error.main : theme.palette.neutral.darkest}`,
      borderRadius: '8px'
    },
    name,
    inputMode: 'numeric',
    ...(error ? { 'aria-invalid': true, 'aria-describedby': errorId } : {})
  } as ReactCodeInputProps;

  return (
    <CodeFieldRoot>
      <FieldCode handleChange={onChangeField} props={dinamicProps} fields={fields} />
      {!!error && (
        <Typography id={errorId} variant="body1" sx={{ color: 'error.dark' }} role="alert">
          <>{error}</>
        </Typography>
      )}
    </CodeFieldRoot>
  );
};
export default CodeField;
