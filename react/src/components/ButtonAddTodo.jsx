import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo, postTodo } from '../redux/actions/todosAction';

const ButtonAddTodo = () => {
  const dispatch = useDispatch();
  const textForm = useSelector(({ todosReducer }) => todosReducer.text);

  const handleAddTodo = () => {
    dispatch(postTodo(textForm));
  }; 

  useEffect(() => {
    const fetchData = () => {
      dispatch(getTodo());
    };
    fetchData();
  }, []);

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
