import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchTodo from '../components/SearchTodo';
import menu from '../img/menu.svg';
import home from '../img/home.svg';
import { showSidebar } from '../redux/actions/todosAction';

const Header = () => {
  const show = useSelector(({ todosReducer }) => todosReducer.showSidebar);
  const dispatch = useDispatch();

  const toggleBar = () => {
    dispatch(showSidebar(!show));
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__content-inner">
            <div className="left__control">
              <button type='button' onClick={toggleBar} className="btn">
                <img className="btn-image" src={menu} alt="menu" />
              </button>
              <a className="btn" href="ddd">
                <img className="btn-image" src={home} alt="home" />
              </a>
              <SearchTodo />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
