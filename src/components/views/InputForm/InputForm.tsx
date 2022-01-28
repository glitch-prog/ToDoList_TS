import React, { ChangeEventHandler } from 'react';
import { Input } from '../Input/Input';
import { SubmitBtn } from '../SubmitBtn/SubmitBtn';

interface IInputForm {
  value: string;
  handleOnChangeValue:  ChangeEventHandler<HTMLInputElement>;
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
