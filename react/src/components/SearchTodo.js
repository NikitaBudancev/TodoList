import React from 'react';
import { useDispatch } from 'react-redux';
import { handleSearchText } from '../redux/actions/todosAction';

const SearchTodo = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const text = e.target.value;
    dispatch(handleSearchText(text));
  };

  return (
    <form onSubmit={(event) => event.preventDefault()} className="form-inline">
      <input
        onChange={handleSearch}
        className="search__input"
        type="search"
        placeholder="Поиск"
        aria-label="Search"
      />
    </form>
  );
};

export default SearchTodo;
