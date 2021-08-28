import React, { Component } from 'react';

class BindTest extends Component{
    constructor(props){
        super(props);
        this.test = this.test.bind(this)
        this.state = {
            bindTest: "bindTest"
        };
    }

    test(){
        this.setState({
            bindTest: "success",
            add: "added"
        })
    }

    render(){
        return (
            <div>
                <div className="wrapper_tool">
                    <h3>Bind</h3>
                    <button onClick={this.test}>test</button>
                    <div>{this.state.bindTest}</div>
                    <div>{this.state.add}</div>
                    <div>mac home</div>
                </div>
            </div>
        );
    }
};

export default BindTest;