import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions/todosAction';

const Popup = ({ popup, id }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(deleteTodo(id));
    popup(false);
  };

  const onCancel = () => {
    popup(false);
  };
  return (
    <div className="popup">
      <div className="popup__inner">
        <p className="popup__message">хотите удалить заметку ?</p>
        <div className="popup__control">
          <button
            onClick={removeItem}
            type="button"
            className="add__todo-btn popup-btn"
          >
            Удалить
          </button>
          <button
            onClick={onCancel}
            type="button"
            className="add__todo-btn popup-btn"
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;

Popup.propTypes = {
  popup: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
