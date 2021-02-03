import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionHideAlert } from '../redux/actions/alertAction';

const Alert = () => {
  const alertType = useSelector(({ alertReducer }) => alertReducer.type);
  const alertMessage = useSelector(({ alertReducer }) => alertReducer.message);
  const dispatch = useDispatch();

  const hideAlert = () => {
    dispatch(actionHideAlert());
  };

  return (
    <div
      className={`alert alert-${alertType} alert-dismissible fade show role="alert`}
    >
      <span>{alertMessage}</span>
      <button
        onClick={hideAlert}
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
