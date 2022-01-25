import React from "react";

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
          <li className="user">
            <div className="user-icon">
              <img src={user.avatar_url} alt="" />
            </div>
            <div className="user-info">
              <h5>{user.name}</h5>
              <p>@{user.login}</p>
            </div>
          </li>
          <li className="user">
            <div className="user-icon">
              <img src={user.avatar_url} alt="" />
            </div>
            <div className="user-info">
              <h5>{user.name}</h5>
              <p>@{user.login}</p>
            </div>
          </li>
          <li className="user">
            <div className="user-icon">
              <img src={user.avatar_url} alt="" />
            </div>
            <div className="user-info">
              <h5>{user.name}</h5>
              <p>@{user.login}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
