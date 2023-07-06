// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import './Update.css';
// import Navbar from "./Navbar";

// const Update = () => {
//     const[User,setUser]=useState(
//         {
//             "name": "",
//             "age": "",
//             "specialization": "",
//             "experience": "",
//             "address":"",
//             "email":"",
//             "phoneno":"",
//         }
//       )
//       const[profile,setProfile]=useState({
//           "userId":localStorage.getItem('email')
//       });

//       const[user,setuser]=useState({
//         "id" : 0,
//         "email": "",
//         "password": "",
//         "token": "",
//         "role": ""
//     });
  
//       useEffect(()=>{
//         user.email=localStorage.getItem("email");
//         console.log(user.email);
//         fetch("http://localhost:5035/api/User/UpdateDoctor",{
//             "method":"PUT",
//             headers:{
//                 "accept":"text/plain",
//                 "Content-Type":"application/json",
//             },
//             "body":JSON.stringify({...user,"user":{} })
//         })
//         .then(async (data)=>{
//             if(data.status >= 200 && data.status<=300){
//                 var myData = await data.json();
//                 console.log(myData);
//                 setUser(myData);
//             }
//         })
//         .catch((err)=>{
//             console.log(err.error)
//         })
//       });
  
//     return (
//         <div><Navbar/>
//     <div className="form-container-prof" >
//     <h2>Updated Doctors</h2>

     
//         <div>
//             <div className="UserEmp">
//                 <h3>Name:</h3>
//                 <p>{User.name}</p>
//             </div>

//             <div  className="UserEmp">
//             <h3>Age:</h3>
//             <p>{User.age}</p>
//             </div>

//             <div className="UserEmp">
//             <h3>Specialization:</h3>
//             <p>{User.specialization}</p>
//             </div>

//             <div  className="UserEmp">
//             <h3>Experience:</h3>
//             <p>{User.experience}</p>
//             </div>
            
//             <div  className="UserEmp">
//             <h3>Address:</h3>
//             <p>{User.address}</p>
//             </div>
            
//             <div  className="UserEmp">
//             <h3>Email:</h3>
//             <p>{User.email}</p>
//             </div>
            
//             <div  className="UserEmp">
//             <h3>Ph.No:</h3>
//             <p>{User.phoneno}</p>
//             </div>

//     </div>
//     </div>
// </div>
//     );
//   };
  
//   export default Update;