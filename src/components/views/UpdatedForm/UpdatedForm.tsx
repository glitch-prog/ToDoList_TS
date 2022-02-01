import React, { ChangeEventHandler } from 'react';
import { Input } from '../Input/Input';
import { SubmitBtn } from '../SubmitBtn/SubmitBtn';
interface IUpdatedForm {
  updatedText: string;
  onChange: () => void;
  handleChangeUpdatedText: ChangeEventHandler<HTMLInputElement>;
}
export function UpdatedForm({
  updatedText,
  onChange,
  handleChangeUpdatedText,
}: IUpdatedForm) {
  return (
    <div>
      <Input value={updatedText} onChange={handleChangeUpdatedText} />
      <SubmitBtn onClick={onChange} text='Change' />
    </div>
  );
}
