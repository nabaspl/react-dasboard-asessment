import React from "react";
import './style.css'
export default function Modal(props){
    return <div id="myModal" className="modal">
        <div className="modal-content">
                {props.children}
        </div>
    </div>;
}