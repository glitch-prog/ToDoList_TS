import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
} from 'react';
import { useState } from 'react';
import { InputForm } from '../InputForm/InputForm';
import { Todo } from '../Todo/Todo';
const todos = [
  { id: 0, text: 'hello' },
  { id: 1, text: 'hello' },
  { id: 2, text: 'hello' },
];

export function Todolist() {
  const [item, setItem] = useState(todos);
  const [value, setValue] = useState('');

  const handleOnChangeValue = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const createTodo = () => {
    const todo: { id: number; text: string } = {
      id: item.length,
      text: value,
    };
    setItem([...item, todo]);
    console.log(item);
  };

  const onClickDelete = (id: number) => {
    setItem(item.filter((todo) => id !== todo.id));
    console.log(item);
  };
  const onComplete = () => {};

  return (
    <div>
      <InputForm
        value={value}
        handleOnChangeValue={handleOnChangeValue}
        createTodo={createTodo}
      />
      {item.map((todo) => {
        return (
          <Todo
            key={todo.id}
            text={todo.text}
            onDelete={() => onClickDelete(todo.id)}
            onComplete={onComplete}
          />
        );
      })}
    </div>
  );
}
