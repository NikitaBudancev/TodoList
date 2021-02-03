import axios from 'axios';
import { getTodo, getTodoAction } from './todosAction';

export const SELECT_FILTER = 'SELECT_FILTER';
const BACKEND_URL = 'http://localhost:3080/filter';

export const selectFilter = (id) => ({ type: SELECT_FILTER, payload: id });

export const filterTodo = (id) => async (dispatch) => {
  try {
    if (id === 0) {
      dispatch(getTodo());
    } else {
      const fetchData = await axios.get(`${BACKEND_URL}/${id}?limit=100`);
      const data = await fetchData.data;
      dispatch(getTodoAction(data));
    }
  } catch (err) {
    console.log(err.message);
  }
};
