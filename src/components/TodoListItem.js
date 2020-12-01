import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {deleteItemTodo} from "../redux/actions/todosAction";
import classes from 'classnames'

const TodoListItem = ({item, index}) => {

    const dispatch = useDispatch()
    const [done, setDone] = useState(false)
    const [important, SetImportant] = useState(false)

    const selectImportant = () => {
        SetImportant(important => important !== true)
    }

    const selectDone = () => {
        setDone(done => done !== true)
    }

    const itemDelete = (index) => {
        dispatch(deleteItemTodo(index))
    }

    return (
        <li className='list-group-item d-flex justify-content-between '>
            <span onClick={selectDone} className={classes({
                done: done,
                important: important,
            })}>{item}</span>
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
