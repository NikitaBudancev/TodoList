import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes, { number, string } from 'prop-types'
import classes from 'classnames';
import { putDoneTodo, putImportantTodo } from '../redux/actions/todosAction';
import exclamation from '../img/exclamation.svg';
import trash from '../img/trash-alt.svg';
import Popup from './Popup';

const TodoListItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, done, content, date } = item;
  const [popup, setPopup] = useState(false);

  const selectPopup = () => setPopup(true);
  const selectImportant = () => dispatch(putImportantTodo(id, 3));
  const selectDone = () => dispatch(putDoneTodo(id, !done));
  
  return (
    <li className="list__item">
      {popup && <Popup popup={setPopup} id={id} />}
      <a
        href="/#"
        onClick={selectDone}
        className={classes({
          list__item_text: true,
          done,
        })}
      >
        {content} 
        {date}
      </a>
      <div className="list__item-control">
        <button
          type='button'
          onClick={selectImportant}
          className="btn__control-important btn__control"
        >
          <img
            className="item__control-image control-image"
            src={exclamation}
            alt="important"
          />
        </button>
        <button
          type='button'
          onClick={selectPopup}
          className="btn__control-remove btn__control"
        >
          <img
            className="item__control-image control-image"
            src={trash}
            alt="trash"
          />
        </button>
      </div>
    </li>
  );

}

export default TodoListItem;

TodoListItem.defaultProps = {
  item:{}
}

TodoListItem.propTypes = {
      item: PropTypes.shape({
      id:number.isRequired,
      content:string.isRequired,
      done:number.isRequired,
      date:PropTypes.string.isRequired
    })
}
