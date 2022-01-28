import React from 'react';
interface IButton {
  text: string;
  onClick: () => void;
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
