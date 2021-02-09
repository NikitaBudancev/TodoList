import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonAddTodo from './ButtonAddTodo';
import { handleText } from '../redux/actions/todosActionCreator';
import Alert from './Alert';
import { POST_TODO, TODO_WATCHER } from '../redux/actions/actions';

const TodoForm = () => {
  const textForm = useSelector(({ todosReducer }) => todosReducer.text);
  const dispatch = useDispatch();
  const alertVisible = useSelector(({ alertReducer }) => alertReducer.visible);

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch({ type: POST_TODO, payload: textForm });
  };

  const inputValue = (e) => {
    const { value } = e.target;
    dispatch(handleText(value));
  };

  useEffect(() => {
    dispatch({ type: TODO_WATCHER });
  }, []);

  return (
    <>
      {alertVisible && <Alert />}
      <div className="form">
        <form className="todo__form" onSubmit={handleAddTodo}>
          <input
            className="todo__form-input"
            onChange={inputValue}
            value={textForm}
            type="text"
            placeholder="напиши заметку"
          />
          <ButtonAddTodo />
        </form>
      </div>
    </>
  );
};

export default TodoForm;
