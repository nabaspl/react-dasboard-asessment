import React from "react";
import './style.css';
export default function Button(props){

return <button  type={props.type}
                name={props.name} 
                id={props.id} 
                onClick={props.onClickHandler} 
                className={props.classLists}>
                    {props.children}
                </button>;
}