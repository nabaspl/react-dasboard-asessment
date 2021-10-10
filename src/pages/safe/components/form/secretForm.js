import react ,{useState} from "react";
import Button from "../../../../components/form/button/button";
import Input from "../../../../components/form/input/input";
import './style.css'

export default function SecretForm(props){
    
    
    let initialValues = {
        safeId: props.safeId,
        secret: props.secret
      };

    const [values, setValues] = useState(initialValues);
      
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
        ...values,
        [name]: value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.handleOnSubmit(values);
      };

      

return <form onSubmit={handleSubmit}>
        <Input type="hidden" name="safeId" id="safeId" value={values.safeId||0} onChange={handleInputChange}/>
        <Input type="text" id="secret" name="secret" value={values.secret||''} onChange={handleInputChange} label="Secret"/>
        <div className="button-group">
            <span className="cancel-btn" onClick={props.CloseModal}>Cancel</span>
            <Button>+ Create</Button>
        </div>

    </form>;
}