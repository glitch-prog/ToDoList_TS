import React, { ChangeEventHandler, useState } from 'react';
import { UpdatedForm } from '../UpdatedForm/UpdatedForm';
import { SubmitBtn } from '../SubmitBtn/SubmitBtn';
interface ITodo {
  text: string;
  checked: boolean;
  time: string;
  updatedText: string;
  onDelete: () => void;
  onComplete: () => void;
  onChange: () => void;
  handleChangeUpdatedText: ChangeEventHandler<HTMLInputElement>;
}

export function Todo({
  text,
  checked,
  time,
  updatedText,
  onDelete,
  onComplete,
  onChange,
  handleChangeUpdatedText,
}: ITodo) {
  const [showTime, setShowTime] = useState(false);

  const toggleShowTime = () => {
    setShowTime(!showTime);
  };

  return (
    <div style={{ display: 'flex' }}>
      <SubmitBtn onClick={onComplete} text='done' />
      <p
        onClick={toggleShowTime}
        style={{ textDecoration: checked ? 'line-through' : 'none' }}
      >
        {text}
      </p>
      {showTime ? <p>{time}</p> : null}
      <UpdatedForm
        updatedText={updatedText}
        onChange={onChange}
        handleChangeUpdatedText={handleChangeUpdatedText}
      />
      <SubmitBtn onClick={onDelete} text='delete' />
    </div>
  );
}
