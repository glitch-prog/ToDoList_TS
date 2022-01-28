import React, { MouseEventHandler } from 'react';
interface IButton {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function SubmitBtn({ text, onClick }: IButton) {
  return (
    <div>
      <button onClick={onClick} className='submit__btn'>
        {text}
      </button>
    </div>
  );
}
