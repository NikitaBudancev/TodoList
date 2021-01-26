import React from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteTodo,
  putDoneTodo,
  putImportantTodo,
} from '../redux/actions/todosAction';
import classes from 'classnames';
import exclamation from '../img/exclamation.svg';
import trash from '../img/trash-alt.svg';

const TodoListItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, done, important } = item;

  const selectImportant = () => dispatch(putImportantTodo(id, !important));
  const selectDone = () => dispatch(putDoneTodo(id, !done));
  const itemDelete = () => dispatch(deleteTodo(id));

  return (
    <li className="list__item">
      <a
        href="#"
        onClick={selectDone}
        className={classes({
          list__item_text: true,
          important: item.important,
        })}
      >
        {item.content} {item.date}
      </a>
      <div className="list__item-control">
        <button
          onClick={selectImportant}
          className="btn__control-important btn__control"
        >
          <img
            className="item__control-image control-image"
            src={exclamation}
            alt="important"
          />
        </button>

        <button onClick={itemDelete} className="btn__control-done btn__control">
          <img
            className="item__control-image control-image"
            src={trash}
            alt="trash"
          />
        </button>
      </div>
    </li>
  );
};
export default TodoListItem;
