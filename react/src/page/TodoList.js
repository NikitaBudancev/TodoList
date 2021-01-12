import React from 'react';
import TodoListItem from "../components/TodoListItem";
import TodoForm from "../components/TodoForm";
import {useSelector} from "react-redux";

const TodoList = () => {
    const searchTodo = useSelector(state=>state.todosReducer.todo)
    return (
        <section className='mt-3'>
            <div>
                <TodoForm/>
            </div>
            <ul className='list-group list-group-flush mt-4 '>
                {searchTodo.map((item,index)=><TodoListItem index={index} key={index} item={item}/>)}
            </ul>
        </section>

    );
};

export default TodoList;