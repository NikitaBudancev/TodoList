import React from 'react';
import Header from './page/Header';
import TodoList from './page/TodoList';
import SideBar from './page/SideBar';

const App = () => {
  return (
    <div className="todolist__app">
      <Header />
      <div className="content__wrapper">
        <SideBar />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
