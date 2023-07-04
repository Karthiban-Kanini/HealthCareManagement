import { useState } from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./index.css";

const RegisterPatient = () => {
    const navigate = useNavigate();
    const[user,setuser]=useState({
        // "id" : 0,
        "name": "",
        "password": "",
        "hashKey": "",
        "phoneNumber": "",
        "email": "",
        "age": 0,
        "dateOfBirth": "",
        "gender": "",
        "address": "",
        "maritalStatus": "",
        "bloodGroup": "",
        "userPassword": ""
    });

    var register=()=>{
        console.log(user);
        fetch("http://localhost:5035/api/User/RegisterPatient",{
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
                        <h3>Patient Registration</h3>
                    </div>

                <div className="form-container">

                  <div className="form-left">

                    <input type="text"   required className="input form-control" onChange={(event)=>{setuser({...user,"name":event.target.value})}} placeholder="Name" />
                    <input type="password"   required className="input form-control" onChange={(event)=>{setuser({...user,"userPassword":event.target.value})}} placeholder="Password" />
                    <input type="password"   required className="input form-control" placeholder='Confirm password' />
                    <input type="number" required className="input form-control" onChange={(event)=>{setuser({...user,"age":event.target.value})}} placeholder="Age" />
                    <input type="date"   required className="input form-control" onChange={(event)=>{setuser({...user,"dateOfBirth":event.target.value})}} placeholder="Date Of Birth" />
                    <input type="number" required className="input form-control" onChange={(event)=>{setuser({...user,"mobile":event.target.value})}} placeholder='Mobile number' />
                  </div>

                  <div className="form-right">      
                    <input type="text"   required className="input form-control" onChange={(event)=>{setuser({...user,"email":event.target.value})}} placeholder='Email' />
                    <input type="text"   required className="input form-control" onChange={(event)=>{setuser({...user,"address":event.target.value})}} placeholder='Address' />
                    <input type="text"   required className="input form-control" onChange={(event)=>{setuser({...user,"maritalStatus":event.target.value})}} placeholder='Marital Status'/>
                    <input type="text"   required className="input form-control" onChange={(event)=>{setuser({...user,"bloodGroup":event.target.value})}}placeholder='Blood Group' />
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

export default RegisterPatient;