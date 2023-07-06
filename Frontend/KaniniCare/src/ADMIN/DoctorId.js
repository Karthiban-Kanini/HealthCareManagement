import { useState, useEffect } from "react";
import Board from "./Board";
import "./DoctorId.css";

function DoctorId() {
  const [users, setUsers] = useState([
    {
      id: 0,
      name: "",
      password: "",
      hashKey: "",
      phoneNumber: "",
      email: "",
      age: 0,
      dateOfBirth: "",
      gender: "",
      address: "",
      specialization: "",
      experience: "",
      maritalStatus: "",
      bloodGroup: "",
      status: "",
    },
  ]);

  const viewUsers = () => {
    fetch("http://localhost:5035/api/User/GetDoctor", {
      method: "GET",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
    })
      .then(async (data) => {
        if (data.status >= 200 && data.status <= 300) {
          var myData = await data.json();
          console.log(myData);
          setUsers(myData);
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  useEffect(() => {
    viewUsers();
  }, []);

  return (
    <div>
      <Board />
      <h1 className="form-container-prof">  Doctor Details</h1>
      <main>
        <table >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>D.O.B</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((d) => d.status !== "")
              .map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.dateOfBirth}</td>
                  <td>{user.gender}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default DoctorId;
