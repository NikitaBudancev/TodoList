import * as React from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import Filter from '../components/Filter';

const SideBar: React.FC = () => {
  type FilterType = {
    id: number;
    name: string;
    isActive: boolean;
  };

  type ShowSidebarType = {
    showSidebar: boolean;
  };

  const show: ShowSidebarType = useSelector(
    ({ todosReducer }: any) => todosReducer.showSidebar,
  );
  const filters: Array<FilterType> = useSelector(
    ({ filterReducer }: any) => filterReducer.filters,
  );

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
              {filters.map((item) => (
                <Filter key={item.id} items={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
