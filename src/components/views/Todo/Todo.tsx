import React from 'react';
import { SubmitBtn } from '../SubmitBtn/SubmitBtn';
interface ITodo {
  text: string;
  onDelete: () => void;
  onComplete: () => void;
}

export function Todo({ text, onDelete, onComplete }: ITodo) {
  return (
    <div>
      <SubmitBtn onClick={onDelete} text='done' />
      <p>{text}</p>
      <SubmitBtn onClick={onComplete} text='delete' />
    </div>
  );
}
