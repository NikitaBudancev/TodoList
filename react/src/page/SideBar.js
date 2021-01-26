import React from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';

const SideBar = () => {
  const show = useSelector(({ todosReducer }) => todosReducer.showSidebar);

  return (
    <aside
      className={classnames({
        sidebar: true,
        sidebar__hide: show,
      })}
    >
      <div className="sidebar__content">
        <div className="sidebar__content-inner">
          <div className="filter">
            <ul className="filter__items">
              <p className="filter__title">Фильтры:</p>
              <li className="filter__item filter__active">
                <a className="filter__item-link" href="#">
                  Показать все
                </a>
              </li>
              <li className="filter__item">
                <a className="filter__item-link" href="#">
                  Приоритет 1
                </a>
              </li>
              <li className="filter__item">
                <a className="filter__item-link" href="#">
                  Приоритет 2
                </a>
              </li>
              <li className="filter__item">
                <a className="filter__item-link" href="#">
                  Приоритет 3
                </a>
              </li>
              <li className="filter__item">
                <a className="filter__item-link" href="#">
                  Приоритет 4
                </a>
              </li>
              <li className="filter__item">
                <a className="filter__item-link" href="#">
                  Выполнено
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
