import React, { MouseEventHandler } from 'react';
import { SubmitBtn } from '../SubmitBtn/SubmitBtn';

interface ITodo {
  text: string;
  onDelete: () => void;
  onComplete: () => void;
}

export function Todo({ text, onDelete, onComplete }: ITodo) {
  return (
    <div style={{ display: ' flex ' }}>
      <SubmitBtn onClick={onComplete} text='done' />
      <p>{text}</p>
      <SubmitBtn onClick={onDelete} text='delete' />
    </div>
  );
}
