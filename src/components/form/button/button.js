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

export function ImageBtn(props){
    return <img src={props.src} 
                id={props.id} 
                onClick={props.onClickHandler} 
                className='img-button'/>;
}