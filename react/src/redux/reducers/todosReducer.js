import {
    ACTION_DONE,
    GET_TEST,
    HANDLE_SEARCH_TEXT,
    HANDLE_TEXT,

} from "../actions/todosAction";

const initialState = {
    text: '',
    todo:[],
    searchText: '',
    done: null,
    important:false
}

export const todosReducer = (state = initialState, action) => {

    switch (action.type) {
        case HANDLE_TEXT:
            return {...state, text: state.text = action.payload}


        case HANDLE_SEARCH_TEXT:
            return {...state, searchText: state.searchText = action.payload}

        case GET_TEST:
            return {...state,todo: state.todo = action.payload}

        case ACTION_DONE :
            return {...state,done: state.todo.done }

        default:
            return state
    }
}