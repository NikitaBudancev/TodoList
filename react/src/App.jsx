import React from 'react';
import Header from './page/Header';
import TodoList from './page/TodoList';
import SideBar from './page/SideBar';
import ScrollToTop from './page/ScrollToTop';

const App = () => (
  <div className="todolist__app">
    <Header />
    <div className="content__wrapper">
      <SideBar />
      <TodoList />
      <ScrollToTop />
    </div>
  </div>
);

export default App;
