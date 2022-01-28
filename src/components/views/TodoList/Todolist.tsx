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
  { id: 0, text: 'hello', checked: false },
  { id: 1, text: 'hello', checked: false },
  { id: 2, text: 'hello', checked: false },
];

export function Todolist() {
  const [item, setItem] = useState(todos);
  const [value, setValue] = useState('');

  const handleOnChangeValue = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const createTodo = () => {
    const todo: { id: number; text: string; checked: boolean } = {
      id: item.length,
      text: value,
      checked: false,
    };
    setItem([...item, todo]);
    console.log(item);
  };

  const onClickDelete = (id: number) => {
    setItem(item.filter((todo) => id !== todo.id));
    console.log(item);
  };
  const onComplete = (id: number) => {
    const newTodos = item.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });

    setItem(newTodos);
    console.log(item);
  };

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
            checked={todo.checked}
            onDelete={() => onClickDelete(todo.id)}
            onComplete={() => onComplete(todo.id)}
          />
        );
      })}
    </div>
  );
}
