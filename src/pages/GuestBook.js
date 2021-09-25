import React, { Component } from 'react';

class GuestBook extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return (
            <div>
                <div>GuestBook</div>
                <div className="guestBook">
                    <span>test1</span>
                    <span>test2</span>
                    <span>test3</span>
                    <span>test4</span>
                    <span className="mine">test5</span>
                    <span>test6</span>
                    <span>test7</span>
                </div>
            </div>
        );
    }
};

export default GuestBook;