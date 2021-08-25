import React, { Component } from 'react';
import axios from 'axios'

class Sql extends Component {
    constructor(props)
    {
        super(props);
        this.getData = this.getData.bind(this);
        this.state = {
            test: "before",
        };
    }
    getData = async() => {
        const axiosSet = axios.create({
            baseURL: "http://localhost:3001/",
            Headers:{
                'Content-type': 'application/json; charset=UTF-8'
            }, 
            responseType: 'json',
            responeseEncoding: 'json'
        })
        const res = await axiosSet.get('/chats')

        for(var i=0;i<res.data.length;i++){
            console.log([res.data[i]._id, res.data[i].name, res.data[i].phone]) 

            const props = {className: "test", onClick: () => {}};
            const child = <span>{res.data[i]}</span>
            React.createElement('div', props, child)

        }
        this.setState({
            test: "after"
        })
    }

    render(){
        return (
            <div>
                <div className="wrapper_tool">
                    <h3>SQL Test</h3>
                    <button onClick={ this.getData }>GetData</button>
                </div>
                <div>{this.state.test}</div>
            </div>
        );
    }

};

export default Sql;