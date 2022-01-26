import React,{useState} from 'react';


export default function Nav(props){
 const {user} = props;
 
 
    return(
    <nav>
        <div className='icon'>
                ShelterBook
        </div>
        <input className='search' type="search" placeholder='Buscar...' onChange={(e)=>{props.callback(e.target.value)}} />
        <ul>
            <li>
                
            </li>
            
            <li>
                Home
            </li>
            <li>
                About us
            </li>
            <li>
                Info
            </li>
            <li>
                Contact
            </li>
            <li className='user-icon'>
                <img src={user} alt="user"/>
            </li>
        </ul>
    </nav>
   ) ;
}
