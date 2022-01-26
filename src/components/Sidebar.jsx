import React from "react";
import user_data from "../user_data.json";

export default function Sidebar(props) {
  const { user } = props;
  return (
    <div className="sidebar">
      <div className="bloque">
        <h5>Creemos que podria interesarte</h5>
        <ul>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
        </ul>
      </div>
      <div className="bloque">
        <h5>A quien seguir</h5>
        <ul className="users">
          {user_data.slice(0,3).map((val,key)=>{
            return(
              <li className="user" key={key}>
            <div className="user-icon">
              <img src={val.avatar} alt="" />
            </div>
            <div className="user-info">
              <h5>{val.first_name}</h5>
              <p>@{val.username}</p>
            </div>
          </li>
            )
          })}
          
          
        </ul>
      </div>
    </div>
  );
}
