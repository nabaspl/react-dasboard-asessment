import React from "react";
import './style.css';


const Input = (props) => (
    <div className="form-group">
      {props.label && <label className="label" htmlFor="input-field">{props.label}</label>}
      <input
       type={props.type}
       name={props.name} 
       id={props.id} 
       value={props.value}
       onChange={props.onChange} 
       className={props.classLists} 
       placeholder={props.placeHolder}
      />
    </div>
  );
  
  export default Input;