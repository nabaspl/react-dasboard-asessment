import React from "react";
import './style.css';

const Select = (props) => (
    <div className="form-group">
      {props.label && <label className="label" htmlFor="input-field">{props.label}</label>}
      <select  name={props.name} 
                id={props.id} 
                value={props.value}
                onChange={props.onChange} 
                className={props.classLists}
                className={props.error && 'error'}>
                    {props.options.map((item,i) => (
                            <option key={i} value={item.value}>{item.text}</option>
                    ))}
      </select>
      {props.error && <span className="error">{props.error}</span>}
    </div>
  );
  
  export default Select;