import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
} from 'react';
import { useState } from 'react';
import { InputForm } from '../InputForm/InputForm';
import { Todo } from '../Todo/Todo';
interface IItem {
  id: number;
  time: string;
  text: string;
  checked: boolean;
}

export function Todolist() {
  const [item, setItem] = useState<IItem[]>([]);
  const [value, setValue] = useState<string>('');
  const [updatedText, setUpdatedText] = useState<string>('');

  const handleOnChangeValue = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const handleOnChangeUpdatedText = (event: ChangeEvent<HTMLInputElement>) =>
    setUpdatedText(event.target.value);

  const createTodo = () => {
    const date = new Date();
    const todo: { id: number; text: string; time: string; checked: boolean } = {
      id: item.length,
      text: value,
      time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
      checked: false,
    };
    setItem([...item, todo]);
    console.log(item);
  };

  const onClickDelete = (id: number) => {
    setItem(item.filter((todo) => id !== todo.id));
    console.log(item);
  };

  const onChange = (id: number) => {
    const updatedTodos = item.map((todo) => {
      if (todo.id === id) {
        todo.text = updatedText;
      }
      return todo;
    });

    setItem(updatedTodos);
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
            time={todo.time}
            key={todo.id}
            text={todo.text}
            checked={todo.checked}
            updatedText={updatedText}
            onDelete={() => onClickDelete(todo.id)}
            onComplete={() => onComplete(todo.id)}
            handleChangeUpdatedText={handleOnChangeUpdatedText}
            onChange={() => onChange(todo.id)}
          />
        );
      })}
    </div>
  );
}
