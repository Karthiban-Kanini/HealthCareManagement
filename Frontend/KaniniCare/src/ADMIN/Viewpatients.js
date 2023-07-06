import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Viewpatients.css'
import PatNavbar from './PatNavbar';

const ViewPatients= () => {
const [patients, setPatients] = useState([]);
// const navigate=useNavigate();
const logout = () => {
    localStorage.removeItem("id");
    // navigate("/PatNavabar/");
};
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch("http://localhost:5035/api/User/GetAllPatient", {
          method: "GET",
          headers: {
            "accept": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
        //   const patients = data.filter(patient => patient.status === "Approved");
          setPatients(data);
        } else {
          console.log("Error:", response.status);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchPatients();  }, []);


    
  return (
    <div >
      <PatNavbar/>
      <h1 className="form-container-prof">Patients</h1>
      <div id="loggedItems">
        <table className="table" id="doviwtable">
          <thead>
            <tr >
              <th >Patient Id</th>
              <th >Name</th>
              <th >Age</th>
              <th >DOB</th>
              <th >Email</th>
              <th >Gender</th>

            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} >
                <td >{patient.id}</td>
                <td >{patient.name}</td>
                <td >{patient.age}</td>
                <td >{patient.dateOfBirth}</td>
                <td >{patient.email}</td>
                <td >{patient.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
      </div>
    </div>
  );
};


export default ViewPatients;