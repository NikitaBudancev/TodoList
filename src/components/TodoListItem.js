import React from 'react';
import {useSelector} from "react-redux";

const TodoListItem = ({item}) => {
    const done = useSelector(state=>state.todosReducer.listItem.done)

    return (



     <li className='list-group-item d-flex justify-content-between'>
         <span className={done ? 'done': null}>{item}</span>
         <div>
             <button className='btn btn-success mr-2'>!</button>
             <button className='btn btn-danger '>&#10008;</button>
         </div>

     </li>
    );
};

export default TodoListItem;