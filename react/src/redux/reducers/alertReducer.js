import { HIDE_ALERT, SHOW_ALERT } from '../actions/alertAction';

const initialState = {
  visible: false,
  type: '',
  message: '',
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        visible: true,
        message: action.payload.message,
        type: action.payload.type,
      };
    case HIDE_ALERT:
      return { ...state, visible: false };
    default:
      return state;
  }
};

export default alertReducer;
