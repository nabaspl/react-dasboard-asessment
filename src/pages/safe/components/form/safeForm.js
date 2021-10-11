import react ,{useState} from "react";
import Button from "../../../../components/form/button/button";
import Input from "../../../../components/form/input/input";
import Select from "../../../../components/form/select/select";
import TextArea from "../../../../components/form/textArea/textArea";
import SafeIcon from'../../../../assets/images/safeIcon.svg'
import './style.css'

import {useSelector} from 'react-redux'

export default function SafeForm(props){
    
    
    let initialValues = {
        safeId: props.CurrentValue.safeId,
        safeName: props.CurrentValue.safeName,
        ownerName: props.CurrentValue.ownerName,
        safeType: props.CurrentValue.safeType,
        safeDescription: props.CurrentValue.safeDescription
      };

    const [values, setValues] = useState(props.CurrentValue);
    const [error, setError] = useState(props.CurrentValue);
      
    const options = [{value:'personal', text:'Personal' },{value:'public', text:'Public' }];
    
    const editIndex = useSelector((state) => state.SafeReducer.editSafes)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
        ...values,
        [name]: value,
        });
        validateForm(name, value);
        console.log(error);
    };
    const validateForm = (name,value) =>{

        switch(name){
            case "safeName":
                if(!value){
                    setError({
                        ...error,
                        [name]: "safe name is required",
                        });
                }else{
                    setError({
                        ...error,
                        [name]: false,
                        });
                }
            break;
            case "ownerName":
                if(!value){
                    setError({
                        ...error,
                        [name]: "owner is required",
                        });
                }else{
                    setError({
                        ...error,
                        [name]: false,
                        });
                }
            break;
            case "safeDescription":
                if(value.length<9){
                    setError({
                        ...error,
                        [name]: "safe Description minimum length 10",
                        });
                }else{
                    setError({
                        ...error,
                        [name]: false,
                        });
                }
            break;
           
        }

    }

    const handleSubmit = e => {
        e.preventDefault();
        props.handleOnSubmit(values);
      };

      

return <form onSubmit={handleSubmit}>
        <Input type="hidden" name="safeId" id="safeId" value={values.safeId||0} onChange={handleInputChange}/>
        <div className="form-header">
            <h1  className="h1">Create Safe</h1>
            <div className="safe-details-group">
                <img className="safe-image" src={SafeIcon} />
                <p className="create-safe-desc">A Safe is a logical unit to store the secrets. All the safes are created within Vault. You can control access only at the safe level. As a vault administrator you can manage safes but cannot view the content of the safe.</p>
            </div>
        </div>
        
        <Input type="text" id="safeName" name="safeName" value={values.safeName||''} onChange={handleInputChange} label="Safe Name" error={error.safeName}/>
        
        <Input type="text" id="ownerName" name="ownerName" value={values.ownerName||''} onChange={handleInputChange} label="Owner Name" error={error.ownerName}/>
        
        <Select id="safeType" name="safeType" options={options}  value={values.safeType||''} onChange={handleInputChange} label="Type" error={error.safeType}/>
        
        <TextArea 
        type="text" id="safeDescription" name="safeDescription" 
        value={values.safeDescription||''} rows="5" onChange={handleInputChange} 
        label="Description" info="Please add a minimum of 10 characters" error={error.safeDescription}/>
        
        <div className="button-group">
            <span className="cancel-btn" onClick={props.CloseModal}>Cancel</span>
            {editIndex?<Button>+ Update</Button>:<Button>+ Create</Button>}
        </div>

    </form>;
}