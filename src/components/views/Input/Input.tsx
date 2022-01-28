import { ChangeEventHandler } from 'react';

interface IInput {
  value: string;
  onChange: (event: ChangeEventHandler<HTMLInputElement>) => void;
}

export function Input({ value, onChange }: IInput) {
  return (
    <div>
      <input onChange={onChange} value={value} type='text' />
    </div>
  );
}
