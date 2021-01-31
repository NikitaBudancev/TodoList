import axios from 'axios';

export const HANDLE_TEXT = 'HANDLE_TEXT';
export const ADD_TODO = 'ADD_TODO';
export const SEARCH_TODO = 'SEARCH_TODO';
export const HANDLE_SEARCH_TEXT = 'HANDLE_SEARCH_TEXT';
export const GET_TEST = 'GET_TEST';
export const ACTION_DONE = 'ACTION_DONE';
export const ACTION_POPUP = 'ACTION_POPUP';
export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';

const BACKEND_URL = `http://localhost:3080/todo`;

export const handleText = (text) => ({ type: HANDLE_TEXT, payload: text });
export const addTodo = () => ({ type: ADD_TODO });
export const actionDone = () => ({ type: ACTION_DONE });
export const getTodoAction = (todos) => ({ type: GET_TEST, payload: todos });
export const handleSearchText = (text) => ({
  type: HANDLE_SEARCH_TEXT,
  payload: text,
});

export const showSidebar = (cls) => ({ type: SHOW_SIDEBAR, payload: cls });

export const getTodo = () => async (dispatch) => {
  try {
    const fetchData = await axios.get(`${BACKEND_URL}?limit=100`);
    const data = await fetchData.data;
    dispatch(getTodoAction(data));
  } catch (err) {
    console.log(err.message);
  }
};

export const postTodo = (content) => async (dispatch) => {
  const fetchData = await axios.post(BACKEND_URL, { content });
    dispatch(getTodo())
    dispatch(handleText(''))
    console.log(fetchData)
};

export const putDoneTodo = (id, done) => async (dispatch) => {
  const fetchData = await axios.put(
    `${BACKEND_URL}/done/${id}`,
    { done }
  );
    dispatch(getTodo())
    console.log(fetchData)
};

export const putImportantTodo = (id, important) => async (dispatch) => {

  const fetchData = await axios.put(
    `${BACKEND_URL}/important/${id}`,
    { important }
  );
    dispatch(getTodo())
  console.log(fetchData);
};

export const deleteTodo = (id) => (dispatch) => {
 axios.delete(`${BACKEND_URL}/del/${id}`);
  dispatch(getTodo())
 };

 