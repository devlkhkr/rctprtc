import React from 'react';
import axios from 'axios'

const Sql = () => {
    return (
        <div>
            <div className="wrapper_tool">
                <h3>MySQL Test</h3>
                <button onClick={()=>{ return onDataHandler() }}>GetData</button>
            </div>
        </div>
    );
    function onDataHandler(){
        try{
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
        }
        catch(err){
            console.log(err)
        }
    }
};

export default Sql;