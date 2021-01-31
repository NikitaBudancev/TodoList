import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postTodo } from '../redux/actions/todosAction';

  const ButtonAddTodo = () => {
  const dispatch = useDispatch();
  const textForm = useSelector(({ todosReducer }) => todosReducer.text);

  const handleAddTodo = () => {
    dispatch(postTodo(textForm));
  }; 

  return (
    <button
      disabled={textForm === '' || !textForm.trim()}
      onClick={handleAddTodo}
      type="button"
      className="add__todo-btn"
    >
      Добавить
    </button>
  );
};

export default ButtonAddTodo;
