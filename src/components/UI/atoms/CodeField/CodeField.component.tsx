'use client';
import type { FunctionComponent } from 'react';
import type { CodeFieldProps } from './CodeField.interface';

import { useState, createRef } from 'react';

import { FormControl } from './CodeField.styled';
import { TextField } from '../TextField';

export const CodeField: FunctionComponent<CodeFieldProps> = ({ onSubmit }) => {
  const [code, setCode] = useState<any[]>([]);

  const codeArr = new Array(6).fill(null).map(() => createRef<any>());

  const handleChange = (index: any) => (event: any) => {
    setCode((currentValue) => [...currentValue, event.target.value]);

    event.preventDefault();

    if (codeArr[index + 1].current) {
      codeArr[index + 1].current.focus();
    }
    if (index === 5) {
      const newCode = code.toString();
      onSubmit?.(newCode);
    }
  };
  return (
    <FormControl>
      {codeArr.map((item, index) => (
        <TextField
          key={index}
          variant="outlined"
          onChange={handleChange(index)}
          slotProps={{
            htmlInput: { maxLength: 1, ref: item }
          }}
        />
      ))}
    </FormControl>
  );
};
