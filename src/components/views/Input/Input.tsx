import { ChangeEventHandler } from 'react';

interface IInput {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function Input({ value, onChange }: IInput) {
  return (
    <div>
      <input onChange={onChange} value={value} type='text' />
    </div>
  );
}
