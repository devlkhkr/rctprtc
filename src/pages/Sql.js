import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from 'axios'

class Sql extends Component {
    constructor(props)
    {
        super(props);
        this.getData = this.getData.bind(this);
        this.state = {
            id: "id",
            name: "name",
            phone: "phone",
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

        this.setState({
            id: res.data[0]._id,
            name: res.data[0].name,
            phone: res.data[0].phone
        })
        
        function test(){
            var addHTML = "";
            for(var i=0;i<res.data.length;i++){
                addHTML += res.data[i]._id + res.data[i].name + res.data[i].phone
            }
            return addHTML
        }

        ReactDOM.render(test(), document.getElementById('data'))

    }

    render(){

        const menus = ["Menu1", "Menu2", "Menu3", "Menu4"]
        const menuList = menus.map((menu) => (<li>{menu}</li>));

        return (
            <div>
                <div className="wrapper_tool">
                    <h3>SQL Test</h3>
                    <button onClick={ this.getData }>GetData</button>
                </div>

                <div>
                    {this.state.id}
                    {this.state.name}
                    {this.state.phone}
                </div>

                <div id="data"></div>

                {/* s : render 안에서 생성 */}
                <ul>{menuList}</ul>
                {/* s : render 안에서 생성 */}

                <ul>
                    {["Item1", "Item2", "Item3"].map(item =>
                        <li key="{item}">{item}</li>
                    )}
                </ul>
                {/* e : return 안에서 생성 */}

            </div>
        );
    }

};

export default Sql;