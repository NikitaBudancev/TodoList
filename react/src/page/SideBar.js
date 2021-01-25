import React from 'react';

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__content-inner">
          <div className="filter">
            <ul className="filter__items">
              <li className="filter__item">
                <a className="filter__item-link" href="#">
                  Выполнено
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
                  Показать все
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
