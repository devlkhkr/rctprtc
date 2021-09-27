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
                    <div><span>test1</span></div>
                    <div><span>test2</span></div>
                    <div><span>test3</span></div>
                    <div><span>test4</span></div>
                    <div className="mine"><span>test5</span></div>
                    <div><span>test6</span></div>
                    <div><span>test7</span></div>
                    <div><span>test8</span></div>
                </div>
            </div>
        );
    }
};

export default GuestBook;