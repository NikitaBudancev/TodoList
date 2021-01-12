import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {deleteItemTodo, putTodo} from "../redux/actions/todosAction";
import classes from 'classnames'

const TodoListItem = ({item, index}) => {

    console.log(item)

    const dispatch = useDispatch()
    const [done, setDone] = useState(false)
    const [important, SetImportant] = useState(false)

    const selectImportant = () => {
        SetImportant(important => important !== true)
    }

    const selectDone = () => {
        dispatch(putTodo(2))
    }

    const itemDelete = (index) => {
        dispatch(deleteItemTodo(index))
    }
    console.log(item.date)
    // console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(item.date));

    return (
        <li className='list-group-item d-flex justify-content-between list__item'>
            <span onClick={selectDone} className={classes({
                done: item.done,
                important: item.important,
            })}>{item.text} {item.date} </span>
            <div>
                <button onClick={selectImportant} className='btn btn-success mr-2'>!</button>
                <button onClick={() => {
                    itemDelete(index)
                }} className='btn btn-danger '>&#10008;</button>
            </div>
        </li>
    );
};
export default TodoListItem;
