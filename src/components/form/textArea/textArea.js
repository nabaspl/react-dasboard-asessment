import React from "react";
import './style.css';


const TextArea = (props) => (
    <div className="form-group">
      {props.label && <label className="label" htmlFor="input-field">{props.label}</label>}
      <textarea name={props.name}
                 id={props.id} 
                 onChange={props.onChange} 
                 className={props.classLists}
                 rows={props.rows}
                 value={props.value}
                 minlength="10">
       </textarea>
       <p className="info">{props.info}</p>
    </div>
  );
  
  export default TextArea;