import React from "react";
import './style.css'
import {Link } from "react-router-dom";
export default function NavBar(props){
    
    return <ul className="nav-menu">
                {props.menuItems.map((menu,i)=> (
                     <li key={i}><Link to={`${menu.route}?name=${menu.menuName}&age=10`}>{menu.menuName}</Link></li>
                ))}
            </ul>;
}
