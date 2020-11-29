import React from 'react';
import ButtonAddTodo from "./ButtonAddTodo";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, handleText, showAlert} from "../redux/actions/todosAction";
import Alert from "./Alert";
import {TransitionGroup, CSSTransition} from 'react-transition-group'


const TodoForm = () => {

    const textForm = useSelector(state => state.todosReducer.text)
    const dispatch = useDispatch()
    const alertVisible = useSelector(state => state.todosReducer.visible)


    const handleAddTodo = (e) => {
        e.preventDefault()
        if (textForm !== '') {
            dispatch(showAlert('success', `Заметка: '${textForm}' успешно добавлена!`
            ))
            dispatch(addTodo())
        } else if (textForm === '') {
            dispatch(showAlert('warning', 'Введите текст в поле ввода')
            )
        }

    }

    const inputValue = (e) => {
        const value = e.target.value
        dispatch(handleText(value))
    }

    return (
        <div>

                {alertVisible ?<Alert/> : null}


            <form onSubmit={handleAddTodo}>
                <input onChange={inputValue} value={textForm} type="text" className="form-control col-9"
                       placeholder="напиши заметку"/>
            </form>
            <ButtonAddTodo/>

        </div>

    );
};

export default TodoForm;