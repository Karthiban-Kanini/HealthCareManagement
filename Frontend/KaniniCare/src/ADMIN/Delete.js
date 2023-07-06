import React, { useState,} from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import './Delete.css';
import Board from "./Board";
const Delete = () => {
    const[id,setUser]=useState(0)

      var deleteData=()=>{
        console.log(id);
        fetch(`http://localhost:5035/api/User/DeleteDoctor?ID=${id}`,{
            "method":"DELETE",
            headers:{
                "accept":"text/plain",
            },
            // "body":JSON.stringify({...profile,"profile":{} })
        })
        .then(async (data)=>{
            if(data.status >= 200 && data.status<=300){
                var myData = await data.json();
                console.log(myData);
            }
        })
        .catch((err)=>{
            console.log(err.error)
        })
    }


    return (<div>
    <Board/>
    <div className="form-container-prof" >
    <h2>Delete Doctors</h2>

        <div>
            <div className="UserEmp">
            <input type="number"required className="input form-control" onChange={(event)=>{
                setUser(event.target.value)}
                } placeholder="ID" />
            <div className="input-block register-btn">
                <Link ><button onClick={deleteData} className="register-button">Delete</button></Link>        
            </div>
            </div>

    </div>
    </div>
    </div>
    );
  };
  
  export default Delete;