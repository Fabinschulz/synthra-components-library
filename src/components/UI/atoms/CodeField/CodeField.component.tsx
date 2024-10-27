import { Stack, Typography } from '@mui/material';
import React from 'react';
import ReactCodeInput, { ReactCodeInputProps } from 'react-code-input';
import './CodeField.css';
import { activeTheme, getObjectPropertyValue } from '@/utils';
import { useFormContext } from '@/contexts';
import { CodeFieldProps } from './CodeField.interface';

interface IFieldCode {
  handleChange: (event: string) => void;
  props: ReactCodeInputProps;
  fields: number;
}

const theme = activeTheme();

const FieldCode = ({ handleChange, fields, props }: IFieldCode) => {
  return <ReactCodeInput onChange={handleChange} type="number" fields={fields} {...props} />;
};

export const CodeField: React.FC<CodeFieldProps> = ({ name, toggle, fields = 6 }) => {
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
      outline: 'none',
      width: '60px',
      height: '60px',
      border: `1px solid ${error ? 'red' : 'black'}`,
      borderRadius: '8px'
    },
    name: '',
    inputMode: 'numeric'
  };

  return (
    <Stack justifyContent="center">
      <FieldCode handleChange={onChangeField} props={dinamicProps} fields={fields} />
      {!!error && (
        <Typography variant="body1" color={theme.palette.error.dark}>
          <>{error}</>
        </Typography>
      )}
    </Stack>
  );
};
