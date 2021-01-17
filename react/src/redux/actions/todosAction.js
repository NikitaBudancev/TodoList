import axios from "axios";

export const HANDLE_TEXT = 'HANDLE_TEXT'
export const ADD_TODO = 'ADD_TODO'
export const SEARCH_TODO = 'SEARCH_TODO'
export const HANDLE_SEARCH_TEXT = 'HANDLE_SEARCH_TEXT'
export const DELETE_ITEM_TODO = 'DELETE_ITEM_TODO'
export const GET_TEST = 'GET_TEST'
export const ACTION_DONE = 'ACTION_DONE'

const BACKEND_URL = `http://localhost:3080/todo`

export const handleText = (text) => ({type: HANDLE_TEXT, payload: text})
export const addTodo = () => ({type: ADD_TODO})
export const actionDone = () => ({type: ACTION_DONE})
const getTodoAction = (todos)=> ({type:GET_TEST, payload:todos})


export const getTodo = () => async (dispatch)=>{
        const fetchData = await axios.get(`${BACKEND_URL}?limit=100`)
        const data = await fetchData.data
        await dispatch(getTodoAction(data))
}
export const postTodo = (content) => async (dispatch)=>{
   const fetchData = await axios.post(BACKEND_URL, {content})
    const data = await fetchData.data
    console.log(data)
}

export const putDoneTodo = (id,done) => async (dispatch)=> {
   const fetchData = await axios.put(`${BACKEND_URL}/${id}`, {done,method:"put"})
        console.log(fetchData)
}
export const putImportantTodo = (id,important) => (dispatch)=> {
    axios.put(`${BACKEND_URL}/${id}`, {important,method:"put"})
        .then(res => console.log(res))

}
export const deleteTodo = (id) => (dispatch)=> {
    axios.put(`${BACKEND_URL}/${id}`,{method:"delete"})
        .then(res => console.log(res))

}
export const handleSearchText = (text) => ({type: HANDLE_SEARCH_TEXT, payload: text})

export const searchTodo = () => ({type: SEARCH_TODO})

export const deleteItemTodo = (index) => {
    return {
        type: DELETE_ITEM_TODO,
        payload: index
    }
}










