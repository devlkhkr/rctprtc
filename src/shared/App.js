import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Career, Posts, Tools, Sql, Bind, ShapeMaker, Users, GuestBook } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render(){
        return (
            <div>
                <Menu></Menu>
                <div className="wrapper_contents">
                    <Route exact path="/" component={Home}/>
                    <Switch>
                        <Route path="/about/:name" component={About}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                    <Route path="/career" component={Career}/>
                    <Route path="/posts" component={Posts}/>
                    <Route path="/tools" component={Tools}/>
                    <Route path="/sql" component={Sql}/>
                    <Route path="/bind" component={Bind}/>
                    <Route path="/shapeMaker" component={ShapeMaker}/>
                    <Route path="/guestBook" component={GuestBook}/>
                    <Route path="/users" component={Users}/>
                </div>
            </div>
        );
    }
}

export default App;