import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Board.css"
import { useState } from "react";

function Board(){

        const [isUserDropdownVisible, setUserDropdownVisible] = useState(false);
      
        const toggleDropdownEmployees = () => {
            setUserDropdownVisible(!isUserDropdownVisible);
        };
      
        const closeDropdownEmployees = (e) => {
          if (!e.target.classList.contains('dropbtn')) {
            setUserDropdownVisible(false);
          }
        };

        const [isDropdownVisible, setDropdownVisible] = useState(false);
      
        const toggleDropdown = () => {
          setDropdownVisible(!isDropdownVisible);
        };
      
        const closeDropdown = (e) => {
          if (!e.target.classList.contains('dropbtn')) {
            setDropdownVisible(false);
          }
        };
        const navigate=useNavigate();
        const logout = () => {
            localStorage.removeItem("id");
            navigate("/");
        };

    return(
        <div>
        <div className="navbar">
                <div className="nav-left">
                <Link to='/doctorId'>All Doctor</Link>
                <Link to='/approve'>Approve Doctor</Link>
                <Link to='/delete'>Delete Doctor</Link>
                </div>
            <div className="nav-right">
                <a onClick={logout}>Logout</a>
            </div>  
            </div>
        </div>
    );
}


export default Board;