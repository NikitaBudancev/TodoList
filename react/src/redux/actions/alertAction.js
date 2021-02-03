export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export const showAlert = (type, message) => ({
  type: SHOW_ALERT,
  payload: { type, message },
});

export const actionHideAlert = () => ({ type: HIDE_ALERT });
