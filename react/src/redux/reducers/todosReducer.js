import {
    ADD_TODO,
    DELETE_ITEM_TODO, GET_TEST,
    HANDLE_SEARCH_TEXT,
    HANDLE_TEXT,
    SEARCH_TODO,
} from "../actions/todosAction";

const initialState = {
    text: '',
    todos: [],
    todo:[],
    searchText: '',
    searchTodo: []
}

export const todosReducer = (state = initialState, action) => {

    switch (action.type) {
        case HANDLE_TEXT:
            return {...state, text: state.text = action.payload}

        case ADD_TODO:
            return {...state, todos: [state.text, ...state.todos], text: state.text = ''}

        case HANDLE_SEARCH_TEXT:
            return {...state, searchText: state.searchText = action.payload}

        case SEARCH_TODO:
            return {
                ...state,
                searchTodo: state.todos.filter((todo) => todo.toLowerCase().includes(state.searchText.toLowerCase()))
            }

        case DELETE_ITEM_TODO:
            return {...state, todos: state.todos.slice(0, action.payload).concat(state.todos.slice(action.payload + 1))}

        case GET_TEST:
            return {...state,todo: state.todo = action.payload}
        default:
            return state
    }
}