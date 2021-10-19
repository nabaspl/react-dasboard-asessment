import './style.css';
const IconInput = (props) => (
    <div className="input-group">
      {props.icon && <img className="input-icon" src={props.icon} alt="search"/>}
      <input
       type={props.type}
       name={props.name} 
       id={props.id} 
       value={props.value}
       onChange={props.onChange} 
       className="icon-input" 
       placeholder={props.placeHolder}
      />
    </div>
  );
  
  export default IconInput;