import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo,} from "../redux/actions/todosAction";
import {showAlert} from "../redux/actions/alertAction";

const ButtonAddTodo = () => {

    const dispatch = useDispatch()
    const textForm = useSelector(({todosReducer}) => todosReducer.text)

    const handleAddTodo = () => {
        dispatch(showAlert('success', `Заметка: '${textForm}' успешно добавлена!`
        ))
        dispatch(addTodo())
    }

    return (
        <button disabled={textForm === '' || !textForm.trim()} onClick={handleAddTodo} type="button"
                className="btn btn-outline-success ml-sm-2 d-inline">Добавить</button>
    );
};

export default ButtonAddTodo;