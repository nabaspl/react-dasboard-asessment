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
    const [error, setError] = useState({});
      
    const options = [{value:'personal', text:'Personal' },{value:'public', text:'Public' }];
    
    const editIndex = useSelector((state) => state.SafeReducer.editSafes)
    const safes = useSelector((state) => state.SafeReducer.safes);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
        ...values,
        [name]: value,
        });
        if(error[name])
         if(validateForm(name, value))
            setError({
                ...error,
                [name]: false
                });

        
    };
    const validateForm = (name,value) =>{

        
            if("safeName" == name){
                if(!value){
                    setError({
                        ...error,
                        [name]: "safe name is required",
                        isError:true
                        });
                    return false;
                }else if(!editIndex && safes.filter((safe, index) => safe.safeName == value).length){
                    setError({
                        ...error,
                        [name]: "safe name is already exist",
                        isError:true
                        });
                    return false;
                }else{
                    setError({
                        ...error,
                        [name]: false,
                        isError:false
                        });
                    return true;
                }
            }
            if("ownerName"==name){
                if(!value){
                    setError({
                        ...error,
                        [name]: "owner is required",
                        isError:true
                        });
                        return false;
                }else{
                    setError({
                        ...error,
                        [name]: false,
                        isError:false
                        });
                        return true;
                }
            }
            if("safeDescription"==name){
                if(value.length<9){
                    setError({
                        ...error,
                        [name]: "safe Description minimum length 10",
                        isError:true
                        });
                        return false;
                }else{
                    setError({
                        ...error,
                        [name]: false,
                        isError:true
                        });
                        return true;
                }
            }

            return true;
        

    }
    function processValidation() {
        let e;
        for (const [key, value] of Object.entries(values)) {
            e = validateForm(key, value);
            if(!e){
                return e;
            }
        }
        return true;
        
    }

    

    const handleSubmit = e => {
        e.preventDefault();
        if(processValidation())
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
        
        <Input type="text" id="safeName" name="safeName" value={values.safeName||''} onChange={handleInputChange} label="Safe Name" error={error.safeName} placeHolder="Safe Name"/>
        
        <Input type="text" id="ownerName" name="ownerName" value={values.ownerName||''} onChange={handleInputChange} label="Owner Name" error={error.ownerName} placeHolder="Owner Name"/>
        
        <Select id="safeType" name="safeType" options={options}  value={values.safeType||'personal'} onChange={handleInputChange} label="Type" error={error.safeType}/>
        
        <TextArea 
        type="text" id="safeDescription" name="safeDescription" placeHolder="Type Description"
        value={values.safeDescription||''} rows="5" onChange={handleInputChange} 
        label="Description" info="Please add a minimum of 10 characters" error={error.safeDescription} />
        
        <div className="button-group">
            <span className="cancel-btn" onClick={props.CloseModal}>Cancel</span>
            {editIndex?<Button>+ Update</Button>:<Button>+ Create</Button>}
        </div>

    </form>;
}