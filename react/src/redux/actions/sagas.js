import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { getTodoAction, handleText } from './todosActionCreator';
import { ACTION_DONE, DELETE_TODO, POST_TODO, TODO_WATCHER } from './actions';

export const BACKEND_URL = 'http://localhost:3080/todo';

const fetchTodos = () => axios.get(`${BACKEND_URL}?limit=40&page=1`);
const postTodo = (content) => axios.post(BACKEND_URL, { content });
const deleteTodo = (id) => axios.delete(`${BACKEND_URL}/del/${id}`);
const doneTodo = (id, done) => axios.put(`${BACKEND_URL}/done/${id}`, { done });

function* getTodosWorker() {
  try {
    const fetchData = yield call(fetchTodos);
    const data = yield fetchData.data;
    yield put(getTodoAction(data));
  } catch (err) {
    console.log(err);
  }
}

function* deleteTodoWorker({ payload }) {
  try {
    yield deleteTodo(payload);
    yield put({ type: TODO_WATCHER });
  } catch (e) {
    console.log(e);
  }
}

function* postTodoWorker({ payload }) {
  try {
    yield postTodo(payload);
    yield put({ type: TODO_WATCHER });
    yield put(handleText(''));
  } catch (e) {
    console.log(e);
  }
}

function* doneTodoWorker({ payload }) {
  const { id, done } = payload;
  try {
    yield doneTodo(id, done);
    yield put({ type: TODO_WATCHER });
  } catch (e) {
    console.log(e);
  }
}

export default function* todosWatcher() {
  yield takeEvery(TODO_WATCHER, getTodosWorker);
  yield takeEvery(DELETE_TODO, deleteTodoWorker);
  yield takeEvery(POST_TODO, postTodoWorker);
  yield takeEvery(ACTION_DONE, doneTodoWorker);
}
