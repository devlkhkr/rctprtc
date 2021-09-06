import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Main"
        }
        this.currentChange = this.currentChange.bind(this)
    }
    currentChange = (e) => {
        this.setState({
            currentPage: e.target.innerHTML,
        })
    }
    render(){
        return (
        <div>
            <div className="header">
                <h1><NavLink exact to="/" activeClassName="on">TestWeb</NavLink></h1>
                <div className="menus">
                    <input type="checkbox" id="navTrigger"></input>
                    <label htmlFor="navTrigger" className="ham">
                        <i></i><i></i><i></i><i></i>
                    </label>
                    <label htmlFor="navTrigger" className="mask"></label>
                    <ul className="nav">
                        <li><NavLink exact to="/" activeClassName="on" onClick={this.currentChange}>Main</NavLink></li>
                        <li><NavLink exact to="/about" activeClassName="on" onClick={this.currentChange}>About</NavLink></li>
                        <li><NavLink to="/posts" activeClassName="on" onClick={this.currentChange}>Post</NavLink></li>
                        <li><NavLink to="/tools" activeClassName="on" onClick={this.currentChange}>Tools</NavLink></li>
                        <li><NavLink to="/sql" activeClassName="on" onClick={this.currentChange}>SQLTest</NavLink></li>
                        <li><NavLink to="/bind" activeClassName="on" onClick={this.currentChange}>BindTest</NavLink></li>
                        <li><NavLink to="/class" activeClassName="on" onClick={this.currentChange}>ClassTest</NavLink></li>
                    </ul>
                </div>
            </div>
            <h2 id="currentTitle">{this.state.currentPage}</h2>
        </div>
    );
}};

export default Menu;