import axios from "axios";

export const HANDLE_TEXT = 'HANDLE_TEXT'
export const ADD_TODO = 'ADD_TODO'
export const SEARCH_TODO = 'SEARCH_TODO'
export const HANDLE_SEARCH_TEXT = 'HANDLE_SEARCH_TEXT'
export const DELETE_ITEM_TODO = 'DELETE_ITEM_TODO'
export const GET_TEST = 'GET_TEST'



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


export const getTodo = (id) =>  (dispatch)=>{
    axios.get(`http://localhost:3080/todo?limit=100`)
        .then( res=>{
            const users = res.data
            console.log(users)
            dispatch({type:GET_TEST,payload:users})
        })
    console.log('userRender')
}
export const postTodo = () => (dispatch)=>{
    axios.post(`http://localhost:3080/todo`,
        {
            text:'next',
            done:false,
            important:false
        })
        .then( res=>console.log(res.data))
    console.log('userRender')
}

export const putTodo = (id) => (dispatch)=>{
    axios.put(`http://localhost:3080/todo/${id}`,{done:true})
        .then( res=> console.log(res))


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










