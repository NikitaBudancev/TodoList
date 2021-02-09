import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { POST_TODO } from '../redux/actions/actions';

const ButtonAddTodo = () => {
  const dispatch = useDispatch();
  const textForm = useSelector(({ todosReducer }) => todosReducer.text);

  const handleAddTodo = () => {
    dispatch({ type: POST_TODO, payload: textForm });
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
