import {
  ADD_TODO,
  GET_TEST,
  HANDLE_SEARCH_TEXT,
  HANDLE_TEXT,
  SHOW_SIDEBAR,
} from './actions';

export const handleText = (text) => ({ type: HANDLE_TEXT, payload: text });
export const addTodo = () => ({ type: ADD_TODO });
export const getTodoAction = (todos) => ({ type: GET_TEST, payload: todos });
export const showSidebar = (cls) => ({ type: SHOW_SIDEBAR, payload: cls });
export const handleSearchText = (text) => ({
  type: HANDLE_SEARCH_TEXT,
  payload: text,
});

// export const putImportantTodo = (id, important) => async (dispatch) => {
//   const fetchData = await axios.put(`${BACKEND_URL}/important/${id}`, {
//     important,
//   });
//   dispatch(getTodo());
//   console.log(fetchData);
// };
//
