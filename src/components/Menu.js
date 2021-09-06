import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Home"
        }
        this.currentChange = this.currentChange.bind(this)
    }
    currentChange = (e) => {
        this.setState({
            currentPage: e.target.getAttribute("title"),
        })
    }
    render(){
        return (
        <div>
            <div className="header">
                <h1><NavLink exact to="/" activeClassName="on" onClick={this.currentChange} title="Home">Home</NavLink></h1>
                <div className="menus">
                    <input type="checkbox" id="navTrigger"></input>
                    <label htmlFor="navTrigger" className="ham">
                        <i></i><i></i><i></i><i></i>
                    </label>
                    <label htmlFor="navTrigger" className="mask"></label>
                    <ul className="nav">
                        <li><NavLink exact to="/about" activeClassName="on" onClick={this.currentChange} title="About">About</NavLink></li>
                        <li><NavLink to="/posts" activeClassName="on" onClick={this.currentChange} title="Post">Post</NavLink></li>
                        <li><NavLink to="/tools" activeClassName="on" onClick={this.currentChange} title="Tools">Tools</NavLink></li>
                        <li><NavLink to="/sql" activeClassName="on" onClick={this.currentChange} title="SQLTest">SQLTest</NavLink></li>
                        <li><NavLink to="/bind" activeClassName="on" onClick={this.currentChange} title="BindTest">BindTest</NavLink></li>
                        <li><NavLink to="/class" activeClassName="on" onClick={this.currentChange} title="ClassTest">ClassTest</NavLink></li>
                    </ul>
                </div>
            </div>
            <h2 id="currentTitle">{this.state.currentPage}</h2>
        </div>
    );
}};

export default Menu;