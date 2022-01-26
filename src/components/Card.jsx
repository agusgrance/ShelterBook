import React from 'react';

export default function Card(props){
    const {user,title,text,icon, username} = props;
    return(
        <div className='card'>
            <div className='user'>
            <img src={icon} alt="" />
            <div className='userdata'>
            <h6>{user}</h6>
            <p>@{username}</p>
            </div>
            
            </div>
            <div className='content'>
            <h3>
                {title}
            </h3>
            <p>
                {text}
            </p>
            </div>
        </div>
    );
}