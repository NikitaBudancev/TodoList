import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { handleSearchText, searchTodo } from "../redux/actions/todosAction";

const SearchTodo = () => {

    const searchText = useSelector(({todosReducer}) => todosReducer.searchText)
    const todos = useSelector(({todosReducer}) => todosReducer.todos)
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        const text = e.target.value
        dispatch(handleSearchText(text))
    }

    useEffect(() => {
        dispatch(searchTodo())
    }, [searchText, todos])

    return (
        <form onSubmit={event => event.preventDefault()} className="form-inline">
            <input onChange={handleSearch} className="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search" />
        </form>
    );
};

export default SearchTodo;