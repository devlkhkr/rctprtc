import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts, Tools, Sql, Bind, Class } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "current page title"
        }
    }
    render(){
        return (
            <div>
                <Menu name={this.state.currentPage}></Menu>
                <div className="wrapper_contents">
                    <Route exact path="/" component={Home}/>
                    <Switch>
                        <Route path="/about/:name" component={About}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                    <Route path="/posts" component={Posts}/>
                    <Route path="/tools" component={Tools}/>
                    <Route path="/sql" component={Sql}/>
                    <Route path="/bind" component={Bind}/>
                    <Route path="/class" component={Class}/>
                </div>
            </div>
        );
    }
}

export default App;