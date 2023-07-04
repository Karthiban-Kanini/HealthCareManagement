import { useState } from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./index.css";

const RegisterAdmin = () => {
    const navigate = useNavigate();
    const[user,setuser]=useState({
        
        "email": "",
        "password": "",
        "hashKey": "",
        "role":"Admin",
        "userPassword": ""
    });

    var register=()=>{
        console.log(user);
        fetch("http://localhost:5035/api/User/RegisterAdmin",{
            "method":"POST",
            headers:{
                "accept":"text/plain",
                "Content-Type":"application/json",
            },
            "body":JSON.stringify({...user})
        })
        .then(async (data)=>{
            if(data.status >= 200 && data.status<=300){
                var myData = await data.json();
                console.log(myData);
                localStorage.setItem('email', myData.email);
                navigate("/Contact/");
            }
        })
        .catch((err)=>{
            console.log(err.error)
        })
    }

    return (
        <div>
<div className="container">
            <div className="left">
                <form className="form">

                    <div class="form-head">
                        <h3>Admin  Registration</h3>
                    </div>

                <div className="form-container">
                <div className="form-left">
                    <input type="text"   required className="input form-control" onChange={(event)=>{setuser({...user,"email":event.target.value})}} placeholder="Email" />
                    <input type="password"   required className="input form-control" onChange={(event)=>{setuser({...user,"userPassword":event.target.value})}} placeholder="Password" />
                 </div>
                 </div>  

                    <div className="input-block register-btn">
                       <Link to="/"><button onClick={register} className="register-button">Register</button></Link>        
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
}

export default RegisterAdmin;