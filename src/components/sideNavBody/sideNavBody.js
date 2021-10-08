import React from "react";
import './style.css';
export default function sideNavBody(props){

return <div  className="side-nav-body">
            {props.children}
        </div>;
        
}