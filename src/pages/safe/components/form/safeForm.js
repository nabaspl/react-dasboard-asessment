import react ,{useState} from "react";
import Button from "../../../../components/form/button/button";
import Input from "../../../../components/form/input/input";
import Select from "../../../../components/form/select/select";
import TextArea from "../../../../components/form/textArea/textArea";
import SafeIcon from'../../../../assets/images/safeIcon.svg'
import './style.css'
export default function SafeForm(props){
    const initialValues = {
        safeName: "",
        ownerName: "",
        safeType: "personal",
        safeDescription: ""
      };
      
    const options = [{value:'personal', text:'Personal' },{value:'public', text:'Public' }];

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
        ...values,
        [name]: value,
        });
    };

return <form onSubmit={props.handleOnSubmit}>
        <div className="form-header">
            <h1  className="h1">Create Safe</h1>
            <div className="safe-details-group">
                <img className="safe-image" src={SafeIcon} />
                <p className="create-safe-desc">A Safe is a logical unit to store the secrets. All the safes are created within Vault. You can control access only at the safe level. As a vault administrator you can manage safes but cannot view the content of the safe.</p>
            </div>
        </div>
        
        <Input type="text" id="safeName" name="safeName" value={values.safeName} onChange={handleInputChange} label="Safe Name"/>
        
        <Input type="text" id="ownerName" name="ownerName" value={values.ownerName} onChange={handleInputChange} label="Owner Name"/>
        
        <Select id="safeType" name="safeType" options={options}  value={values.safeType} onChange={handleInputChange} label="Type"/>
        
        <TextArea 
        type="text" id="safeDescription" name="safeDescription" 
        value={values.safeDescription} rows="5" onChange={handleInputChange} 
        label="Description" info="Please add a minimum of 10 characters"/>
        
        <div className="button-group">
            <Button>Cancel</Button>
            <Button>+ Create</Button>
        </div>

    </form>;
}
function handleOnChange(){

}