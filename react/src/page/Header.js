import React from 'react';
import SearchTodo from '../components/SearchTodo';
import menu from '../img/menu.svg';
import home from '../img/home.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__content-inner">
            <div className="left__control">
              <button className="navbar__btn">
                <img className="navbar__btn-image" src={menu} alt="menu" />
              </button>
              <a className="home__btn" href="#">
                <img className="home__btn-image" src={home} alt="home" />
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
