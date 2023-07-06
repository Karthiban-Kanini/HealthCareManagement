import React, { useEffect, useState } from 'react';
import "./Approve.css";
import Board from "./Board";

const Approve = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch("http://localhost:5035/api/User/GetDoctor", {
        method: "GET",
        headers: {
          "accept": "text/plain",
          "Content-Type": "application/json",
        },
       
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched doctors:", data); 
        setDoctors(data);
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleApprove = async (email, status) => {
    console.log("handleApprove called with email:", email, "and status:", status);
    try {
      const response = await fetch("http://localhost:5035/api/User/DoctorStatusChange", {
        method: "PUT",
        headers: {
          "accept": "text/plain",
          "Content-Type": "application/json",
          // Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ email, status: "Approved" }),
      });

      if (response.ok) {
        fetchDoctors();
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const pendingDoctors = doctors.filter(doctor => (doctor.status=="Pending"||doctor.status=="Disapproved"));

  return (
    <div >
      <Board />
      <h1 className="form-container-prof">Doctors Approval</h1>
      <br />
      <table class="table">
        <thead >
          <tr >
            <th >Doctor Id</th>
            <th >Name</th>
            <th>Email</th>
            <th >Status</th>
            <th >Action</th>
          </tr>
        </thead>
        <tbody>
          {pendingDoctors.map((item,index) => (
            <tr key={index} className="table-row">
              <td >{item.id}</td>
              <td >{item.name}</td>
              <td>{item.email}</td>
              <td >{item.status}</td>
              <td >{item.action}
             
                {(item.status=="Pending"||item.status=="Disapproved") && (
                  <button class="button"  onClick={() => handleApprove(item.email,item.status)}>
                    Approve
                  </button>
                )}   
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Approve;