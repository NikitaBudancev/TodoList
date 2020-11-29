import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {handleSearchText, searchTodo} from "../redux/actions/todosAction";

const SearchTodo = () => {

    const searchText = useSelector(state=>state.todosReducer.searchText)
    const todos = useSelector(state=>state.todosReducer.todos)
    const dispatch = useDispatch()

    const handleSearch=(e)=>{
        const text = e.target.value
        dispatch(handleSearchText(text))
    }


    useEffect(()=>{
        dispatch(searchTodo())
        console.log(1)
    },[searchText,todos])



    return (
        <form className="form-inline">
            <input onChange={handleSearch} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        </form>
    );
};

export default SearchTodo;