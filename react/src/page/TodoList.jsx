import React from 'react';
import { useSelector } from 'react-redux';
import TodoListItem from '../components/TodoListItem';
import TodoForm from '../components/TodoForm';

const TodoList = () => {
  const todos = useSelector((state) => state.todosReducer.todo);
  return (
    <section className="editor">
      <div>
        <TodoForm />
      </div>
      <ul className="list__items">
        {todos.map((item, index) => (
          <TodoListItem index={index} key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
