import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, showAlert } from "../redux/actions/todosAction";

const ButtonAddTodo = () => {

    const dispatch = useDispatch()
    const formText = useSelector(state => state.todosReducer.text)

    const handleAddTodo = () => {
        dispatch(showAlert())
        dispatch(addTodo())
    }

    return (
        <button disabled={formText === '' || !formText.trim()} onClick={handleAddTodo} type="button"
            className="btn btn-outline-success ml-sm-2 d-inline">Добавить</button>
    );
};

export default ButtonAddTodo;