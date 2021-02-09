import { all } from 'redux-saga/effects';
import todosWatcher from './sagas';

export default function* rootWatcher() {
  try {
    yield all([todosWatcher()]);
  } catch (err) {
    console.log(err);
  }
}
