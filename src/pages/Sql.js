import React, { Component } from 'react';
import axios from 'axios'

class Sql extends Component {
    constructor(props)
    {
        super(props);
        this.getData = this.getData.bind(this)
        this.state = {
            chats: "before",
        };
    }
    state = {
        test: "Test"
    }
    getData = () => {
        const axiosSet = axios.create({
            baseURL: "http://localhost:3001/",
            Headers:{
                'Content-type': 'application/json; charset=UTF-8'
            }, 
            responseType: 'json',
            responeseEncoding: 'json'
        })
        const res=axiosSet.get('/chats')
        res.then(function(res){
            console.log(res.data)
        })
        this.setState({
            chats: "after"
        })
    }    
    render(){
        return (
            <div>
                <div className="wrapper_tool">
                    <h3>MySQL Test</h3>
                    <button onClick={ this.getData }>GetData</button>
                </div>
                <div>{this.state.chats}</div>
            </div>
        );
    }

};

export default Sql;