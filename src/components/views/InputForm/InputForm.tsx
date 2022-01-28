import React, { ChangeEventHandler } from 'react';
import { Input } from '../Input/Input';
import { SubmitBtn } from '../SubmitBtn/SubmitBtn';

interface IInputForm {
  value: string;
  handleOnChangeValue: (event: ChangeEventHandler<HTMLInputElement>) => void;
  createTodo: () => void;
}

export function InputForm({
  value,
  handleOnChangeValue,
  createTodo,
}: IInputForm) {
  return (
    <div>
      <Input value={value} onChange={handleOnChangeValue} />
      <SubmitBtn text='add' onClick={createTodo} />
    </div>
  );
}
