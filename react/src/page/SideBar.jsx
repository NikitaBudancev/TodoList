import React from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import Filter from '../components/Filter';

const SideBar = () => {
  const show = useSelector(({ todosReducer }) => todosReducer.showSidebar);
  const filters = useSelector(({filterReducer}) => filterReducer.filters)
  

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
              { filters.map((item) => <Filter key={item.id} items={item} /> )}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
