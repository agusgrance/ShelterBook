import React from 'react';

export default function Card(props){
    const {user,title,text} = props;
    return(
        <div className='card'>
            <div className='user'>
                <h6>{user}</h6>
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