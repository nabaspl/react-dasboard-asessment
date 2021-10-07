import React from "react";
import './style.css';
export default function Select(props){

return <select  type={props.type}
                name={props.name} 
                id={props.id} 
                onChange={props.onClickChange} 
                className={props.classLists}>
                    {props.options.map((item,i) => (
                            <option key={i} value={item.value}>{item.text}</option>
                    ))}
                </select>;
}