export const HANDLE_TEXT = 'HANDLE_TEXT'
export const ADD_TODO = 'ADD_TODO'
export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'
export const DONE_ITEM = 'DONE_ITEM'
export const SEARCH_TODO = 'SEARCH_TODO'
export const HANDLE_SEARCH_TEXT = 'HANDLE_SEARCH_TEXT'


export const handleText = (text) => {
    return {
        type: HANDLE_TEXT,
        payload: text
    }
}

export const addTodo = () => {
    return {
        type: ADD_TODO,
    }
}

// <<===========  alert  =============>>
export const showAlert = (type, message) => {
    return {
        type: SHOW_ALERT,
        payload: {type, message}
    }
}
export const actionHideAlert = () => {
    return {
        type: HIDE_ALERT,
    }
}
// <<===========  alert  =============>>

export const doneItem = (index) => {
    return {
        type: DONE_ITEM,
        payload: index
    }
}


export const handleSearchText = (text) => {
    return {
        type: HANDLE_SEARCH_TEXT,
        payload: text
    }
}
export const searchTodo = () => {
    return {
        type: SEARCH_TODO,
    }
}








