import {useState,useEffect} from "react";
import Board from "./Board";
import {react} from 'react';

function DoctorId(){
    const[users,setUsers]=useState([
        {
            "id": 0,
            "name": "",
            "password": "",
            "hashKey": "",
            "phoneNumber": "",
            "email": "",
            "age": 0,
            "dateOfBirth": "",
            "gender": "",
            "address": "",
            "specialization": "",
            "experience": "",
            "maritalStatus": "",
            "bloodGroup": "",
            "status": ""
          }]
    );
    const viewUsers=()=>{
        fetch("http://localhost:5035/api/User/GetDoctor",{
            "method":"POST",
            headers:{
                "accept":"text/plain",
                "Content-Type":"application/json",
            }//,
            // "body":JSON.stringify({...profile,"profile":{} })
        })
        .then(async (data)=>{
            if(data.status >= 200 && data.status<=300){
                var myData = await data.json();
                console.log(myData);
                setUsers(myData);
            }
        })
        .catch((err)=>{
            console.log(err.error)
        })
    };

    useEffect(() => {
        viewUsers();
      }, []);

return(
    <div>
        <Board/>
        <h1 className="">Doctor Details</h1>
    <main>
    <table className="">
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>D.O.B</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
            </tr>
            { users.filter((d)=>d.user.status !="")
            .map((user) => (
                    <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.dateOfBirth}</td>
                            <td>{user.gender}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.email}</td>
                            <td>{user.status}</td>
                    </tr>
            ))} 
    </table>
    </main>
    </div>
)
}

export default DoctorId;

// import {useState,useEffect} from "react";
// import Board from "./Board";

// function DoctorID(){
//     const[users,setUsers]=useState([
//         {
//             "id": 0,
//             "name": "",
//             "password": "",
//             "hashKey": "",
//             "phoneNumber": "",
//             "email": "",
//             "age": 0,
//             "dateOfBirth": "",
//             "gender": "",
//             "address": "",
//             "specialization": "",
//             "experience": "",
//             "maritalStatus": "",
//             "bloodGroup": "",
//             "status": ""
//           }]
//     );

//     const viewEmployees=()=>{
//         fetch("http://localhost:5035/api/User/GetAllDoctor",{
//             "method":"POST",
//             headers:{
//                 "accept":"text/plain",
//                 "Content-Type":"application/json",
//             }//,
//             // "body":JSON.stringify({...users})
//         })
//         .then(async (data)=>{
//             if(data.status >= 200 && data.status<=300){
//                 var myData = await data.json();
//                 console.log(myData);
//                 setUsers(myData);
//             }
//         })
//         .catch((err)=>{
//             console.log(err.error)
//         })
//     };

//     useEffect(() => {
//         viewEmployees();
//       }, []);

// return(
//     <div>
//     <Board/>
//         <h1 className="list-head">Doctor Details</h1>
//     <main>
//     <table>
//         <tr>
//         <th>ID</th>
//         <th>Name</th>
//         <th>D.O.B</th>
//         <th>Gender</th>
//         <th>Phone</th>
//             <th>Email</th>
//             <th>Status</th>
//             </tr>
//             { users.filter((d)=>d.user.status !="Quit").map((user) => (
//                     <tr>
//                             <td>{user.id}</td>
//                             <td>{user.name}</td>
//                             <td>{user.dateOfBirth}</td>
//                             <td>{user.gender}</td>
//                             <td>{user.phoneNumber}</td>
//                             <td>{user.email}</td>
//                             <td>{user.status}</td>
//                     </tr>
//             ))}    
//     </table>
//     </main>
//     </div>
// )
// }

// export default DoctorID;