import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import './Update.css';
import Board from "./Board";

const Update = () => {
    const[User,setUser]=useState(
        {
            "name": "",
            "age": "",
            "specialization": "",
            "experience": "",
            "address":"",
            "email":"",
            "phoneno":"",
        }
      )
      const[profile,setProfile]=useState({
          "userId":localStorage.getItem('id')
      });
  
      useEffect(()=>{
        fetch("http://localhost:5201/api/User/action/View_Profile",{
            "method":"POST",
            headers:{
                "accept":"text/plain",
                "Content-Type":"application/json",
            },
            "body":JSON.stringify({...profile,"profile":{} })
        })
        .then(async (data)=>{
            if(data.status >= 200 && data.status<=300){
                var myData = await data.json();
                console.log(myData);
                setUser(myData);
            }
        })
        .catch((err)=>{
            console.log(err.error)
        })
      });
  
    return (
        <div><Board/>
    <div className="form-container-prof" >
    <h2>Updated Doctors</h2>

     
        <div>
            <div className="UserEmp">
                <h3>Name:</h3>
                <p>{User.name}</p>
            </div>

            <div  className="UserEmp">
            <h3>Age:</h3>
            <p>{User.age}</p>
            </div>

            <div className="UserEmp">
            <h3>Specialization:</h3>
            <p>{User.specialization}</p>
            </div>

            <div  className="UserEmp">
            <h3>Experience:</h3>
            <p>{User.experience}</p>
            </div>
            
            <div  className="UserEmp">
            <h3>Address:</h3>
            <p>{User.address}</p>
            </div>
            
            <div  className="UserEmp">
            <h3>Email:</h3>
            <p>{User.email}</p>
            </div>
            
            <div  className="UserEmp">
            <h3>Ph.No:</h3>
            <p>{User.phoneno}</p>
            </div>

    </div>
    </div>
</div>
    );
  };
  
  export default Update;