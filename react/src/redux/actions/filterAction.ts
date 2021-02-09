import axios from 'axios';
import { getTodoAction } from './todosActionCreator';

export const SELECT_FILTER = 'SELECT_FILTER';
const BACKEND_URL = 'http://localhost:3080/filter';

type SelectFilterType = {
  type: typeof SELECT_FILTER;
  payload: number;
};

export const selectFilter = (id: number): SelectFilterType => ({
  type: SELECT_FILTER,
  payload: id,
});

type FilterTodoAction = {
  id: number;
  content: string;
  priority: number;
  done: number;
  date: string;
};

export const filterTodo = (id: number) => async (dispatch: any) => {
  try {
    if (id === 0) {
      dispatch('TODO_WATCHER');
    } else {
      const fetchData = await axios.get(`${BACKEND_URL}/${id}?limit=100`);
      const data: Array<FilterTodoAction> = await fetchData.data;
      dispatch(getTodoAction(data));
    }
  } catch (err) {
    console.log(err.message);
  }
};
