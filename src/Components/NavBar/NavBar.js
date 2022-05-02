import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
export default function NavBar(props) {
  return (
    <div className="navBarFlex">
      <div className="navBarInnerFlex">
        <ul>
          <li style={{color:`${props.color}`}}>Home</li>
          <Link to="/Events">
            <li style={{color:`${props.color}`}}>Event</li>
          </Link>
          <li style={{color:`${props.color}`}}>Contact</li>
          <Link to="/Register">
            <li  style={{color:`${props.color}`}}>Register</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
