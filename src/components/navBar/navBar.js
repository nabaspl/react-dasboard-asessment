import React from "react";
import './style.css'
import {Link, useLocation } from "react-router-dom";
export default function NavBar(props){
    const location = useLocation();
    return <ul className="nav-menu">
                {props.menuItems.map((menu,i)=> (
                     <li key={i} className={location.pathname === menu.route ?"active":""}>
                         <Link to={`${menu.route}?name=${menu.menuName}&age=10`}>{menu.menuName}</Link>
                    </li>
                ))}
            </ul>;
}
