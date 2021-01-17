import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, getTodo, postTodo,} from "../redux/actions/todosAction";
import {showAlert} from "../redux/actions/alertAction";

const ButtonAddTodo = () => {

    const dispatch = useDispatch()
    const textForm = useSelector(({todosReducer}) => todosReducer.text)

    const handleAddTodo = () => {

        dispatch(postTodo(textForm))
    }

    useEffect(()=>{
        const fetchData = async ()=>{
            await dispatch(getTodo())
        }
        fetchData()
    },[])

    return (
        <button disabled={textForm === '' || !textForm.trim()} onClick={handleAddTodo} type="button"
                className="btn btn-outline-success ml-sm-2 d-inline">Добавить</button>
    );
};

export default ButtonAddTodo;