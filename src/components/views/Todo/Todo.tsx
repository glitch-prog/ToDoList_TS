import React, { MouseEventHandler } from 'react';
import { SubmitBtn } from '../SubmitBtn/SubmitBtn';

interface ITodo {
  text: string;
  checked: boolean;
  onDelete: () => void;
  onComplete: () => void;
}

export function Todo({ text, checked, onDelete, onComplete }: ITodo) {
  return (

    <div style={{ display: 'flex' }}>

      <SubmitBtn onClick={onComplete} text='done' />
      <p style={{ textDecoration: checked ? 'line-through' : 'none' }}>
        {text}
      </p>
      <SubmitBtn onClick={onDelete} text='delete' />
    </div>
  );
}
