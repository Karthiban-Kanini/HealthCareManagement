import './index.css';
import bgImg from '../assert/images/admin.jpg';
import { useForm } from 'react-hook-form';
import { useState } from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SignUpAdmin = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);
  const navigate = useNavigate();
  const[user,setuser]=useState({
      // "id" : 0,
      "email": "",
      "password": "",
      "token": "",
      "role": "Doctor"
  });

  var login=()=>{
    fetch("http://localhost:5035/api/User/LoginAdmin",{
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
            console.log("Admin Logged in Successfully");
            localStorage.setItem('email', myData.email);
            alert("admin")
            navigate("/Board/");
        }
    })
    .catch((err)=>{
        console.log(err.error)
    })
}

  return (
    <>
        <section className='section'>
        <div className="register">
            <div className="col-1">
                <h2>Admin Log In</h2><br/>
                <span>Register & Enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" onChange={(event)=>{setuser({...user,"email":event.target.value})}} placeholder='Email' />
                    <input type="password" onChange={(event)=>{setuser({...user,"password":event.target.value})}} placeholder='Password' />
                    <input type="password" {...register("confirmpwd")} placeholder='Confirm password' />
                    <div className="input-block register-btn">
                       <Link to="/Board/"><button onClick={login} className="register-button">Login</button></Link>        
                    </div>
                </form>
            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
    </>
  );
};

export default SignUpAdmin;
