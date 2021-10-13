import React from "react";
import './style.css';


const TextArea = (props) => (
    <div className="form-group">
      {props.label && <label className="label" htmlFor="input-field">{props.label}</label>}
      <textarea name={props.name}
                 id={props.id} 
                 onChange={props.onChange}
                 placeholder={props.placeHolder}
                 rows={props.rows}
                 value={props.value}
                 className={`${props.error!=undefined && 'error'}`}
                 required>
       </textarea>
       {props.error && <span className="error">{props.error}</span>}
       <p className="info">{props.info}</p>
    </div>
  );
  
  export default TextArea;