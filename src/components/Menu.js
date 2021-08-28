import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({name}) => {
    return (
        <div>
            <div className="header">
                <h1><NavLink exact to="/" activeClassName="on">TestWeb</NavLink></h1>
                <div className="menus">
                    <input type="checkbox" id="navTrigger"></input>
                    <label htmlFor="navTrigger">
                        <i></i><i></i><i></i><i></i>
                    </label>
                    <ul className="nav">
                        <li><NavLink exact to="/" activeClassName="on">Main</NavLink></li>
                        <li><NavLink exact to="/about" activeClassName="on">About</NavLink></li>
                        <li><NavLink to="/posts" activeClassName="on">Post</NavLink></li>
                        <li><NavLink to="/tools" activeClassName="on">Tools</NavLink></li>
                        <li><NavLink to="/sql" activeClassName="on">SQLTest</NavLink></li>
                        <li><NavLink to="/bind" activeClassName="on">BindTest</NavLink></li>
                        <li><NavLink to="/class" activeClassName="on">ClassTest</NavLink></li>
                    </ul>
                </div>
            </div>
            <h2 id="currentTitle">{name}</h2>
        </div>
    );
};

export default Menu;