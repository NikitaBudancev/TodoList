import React from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteTodo,
  putDoneTodo,
  putImportantTodo,
} from '../redux/actions/todosAction';
import classes from 'classnames';

const TodoListItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, done, important } = item;

  const selectImportant = () => dispatch(putImportantTodo(id, !important));
  const selectDone = () => dispatch(putDoneTodo(id, !done));
  const itemDelete = () => dispatch(deleteTodo(id));

  return (
    <li className="list-group-item d-flex justify-content-between list__item">
      <span
        onClick={selectDone}
        className={classes({
          done: item.done,
          important: item.important,
        })}
      >
        {item.content} {item.date}{' '}
      </span>
      <div>
        <button onClick={selectImportant} className="btn btn-success mr-2">
          !
        </button>
        <button onClick={itemDelete} className="btn btn-danger">
          &#10008;
        </button>
      </div>
    </li>
  );
};
export default TodoListItem;
