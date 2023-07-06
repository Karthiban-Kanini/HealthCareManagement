import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Board.css"
import { useState } from "react";

function Board(){

        const navigate=useNavigate();
        const logout = () => {
            localStorage.removeItem("id");
            navigate("/");
        };

    return(
        <div>
        <div className="navbar">
                <div className="nav-left">
       
                <Link to='/viewpatients'>View doctors</Link>
                </div>
            <div className="nav-right">
                <a onClick={logout}>Logout</a>
            </div>  
            </div>
        </div>
    );
}


export default Board;