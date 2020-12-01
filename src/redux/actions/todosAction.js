export const HANDLE_TEXT = 'HANDLE_TEXT'
export const ADD_TODO = 'ADD_TODO'
export const SEARCH_TODO = 'SEARCH_TODO'
export const HANDLE_SEARCH_TEXT = 'HANDLE_SEARCH_TEXT'
export const DELETE_ITEM_TODO = 'DELETE_ITEM_TODO'

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

export const deleteItemTodo = (index) => {
    return {
        type: DELETE_ITEM_TODO,
        payload: index
    }
}










