import React from 'react';
import SearchTodo from "../components/SearchTodo";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">Todo List</a>
                <SearchTodo/>
            </nav>
        </header>
    );
};

export default Header;