import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { useState } from 'react';
import { InputForm } from '../InputForm/InputForm';
import { Todo } from '../Todo/Todo';
const todos = [
  { id: '0', text: 'hello' },
  { id: '1', text: 'hello' },
  { id: '2', text: 'hello' },
];

export function Todolist() {
  const [item, setItem] = useState(todos);
  const [value, setValue] = useState('');

  const handleOnChangeValue = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  const createTodo = () => {
    const todo: { id: Number; text: string } = {
      id: item.length,
      text: value,
    };
    setItem([...item, todo]);
  };

  const onDelete = () => {};
  const onComplete = () => {};

  return (
    <div>
      <InputForm value={value} handleOnChangeValue={handleOnChangeValue} />
      {todos.map((todo) => {
        return (
          <Todo text={todo.text} onDelete={onDelete} onComplete={onComplete} />
        );
      })}
    </div>
  );
}
