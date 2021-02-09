import {
  GET_TEST,
  HANDLE_SEARCH_TEXT,
  HANDLE_TEXT,
  SHOW_SIDEBAR,
} from '../actions/actions';

type TodosType = {
  id: number;
  done: boolean;
  important: number;
  content: string;
  date: string;
};

type InitialStateType = {
  text: string;
  todos: Array<TodosType>;
  searchText: string;
  showSidebar: boolean;
};

const initialState: InitialStateType = {
  text: '',
  todos: [],
  searchText: '',
  showSidebar: false,
};

const todosReducer = (
  state: InitialStateType = initialState,
  action: any,
): InitialStateType => {
  switch (action.type) {
    case HANDLE_TEXT:
      return { ...state, text: action.payload };

    case HANDLE_SEARCH_TEXT:
      return { ...state, searchText: action.payload };

    case GET_TEST:
      return { ...state, todos: action.payload };

    case SHOW_SIDEBAR:
      return { ...state, showSidebar: action.payload };

    default:
      return state;
  }
};

export default todosReducer;
