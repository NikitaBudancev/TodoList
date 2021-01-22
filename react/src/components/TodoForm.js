import React,{useEffect} from 'react';
import ButtonAddTodo from "./ButtonAddTodo";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, getTodo, handleText,getTodoAction} from "../redux/actions/todosAction";
import {showAlert} from "../redux/actions/alertAction";
import Alert from "./Alert";


const TodoForm = () => {

    const textForm = useSelector(({todosReducer}) => todosReducer.text)
    const dispatch = useDispatch()
    const alertVisible = useSelector(({alertReducer}) => alertReducer.visible)

    const handleAddTodo = (e) => {
        e.preventDefault()
        // if (textForm !== '') {
        //     dispatch(showAlert('success', `Заметка: '${textForm}' успешно добавлена!`
        //     ))
            dispatch(addTodo())
        // } else if (textForm === '') {
        //     dispatch(showAlert('warning', 'Введите текст в поле ввода')
        //     )
        // }
    }

    const inputValue = (e) => {
        const value = e.target.value
        dispatch(handleText(value))
    }

    useEffect(()=>{
            dispatch(getTodo())
    },[])

    return (
        <>
            {alertVisible && <Alert/>}
            <div>
                <form className='d-flex' onSubmit={handleAddTodo}>
                    <input
                        onChange={inputValue}
                        value={textForm} type="text"
                        className="form-control col-9"
                        placeholder="напиши заметку"/>
                    <ButtonAddTodo/>
                </form>
            </div>
        </>
    );
};

export default TodoForm;