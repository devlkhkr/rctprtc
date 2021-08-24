import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
    }
    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    handleDiscrease = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    test = (parm) => {
        console.log(parm)
    }

    render(){
        return(
            <div className="wrapper_counter">
                <button onClick={this.handleIncrease}>+</button>
                <span>Value: {this.state.number}</span>
                <button onClick={this.handleDiscrease}>-</button>
                <button onClick={this.test("123")}>test</button>
            </div>
        )
    }
}

export default Counter;