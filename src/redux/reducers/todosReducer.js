import { ADD_TODO, HANDLE_SEARCH_TEXT, HANDLE_TEXT, HIDE_ALERT, SEARCH_TODO, SHOW_ALERT } from "../actions/todosAction";

const initialState = {
    text: '',
    todos: [],
    listItem: {
        done: false,
        important: false
    },
    // <<===========  alert  =============>>
    visible: false,
    type: '',
    message: '',
    // <<===========  alert  =============>>

    searchText: '',
    searchTodo: []
}

export const todosReducer = (state = initialState, action) => {

    switch (action.type) {
        case HANDLE_TEXT:
            return { ...state, text: state.text = action.payload }

        case ADD_TODO:
            return { ...state, todos: [state.text, ...state.todos], text: state.text = '' }

        case SHOW_ALERT:
            return {
                ...state, visible: state.visible = true, message: state.message = action.payload.message,
                type: state.type = action.payload.type
            }

        case HIDE_ALERT:
            return { ...state, visible: state.visible = false }

        case HANDLE_SEARCH_TEXT:
            return { ...state, searchText: state.searchText = action.payload }

        case SEARCH_TODO:
            return { ...state, searchTodo: state.todos.filter((todo) => todo.toLowerCase().includes(state.searchText.toLowerCase())) }

        default:
            return state
    }





}