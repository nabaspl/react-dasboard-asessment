import react ,{useState,useEffect} from "react";
import Button from "../../../../components/form/button/button";
import Input from "../../../../components/form/input/input";
import Select from "../../../../components/form/select/select";
import TextArea from "../../../../components/form/textArea/textArea";
import SafeIcon from'../../../../assets/images/safeIcon.svg'
import './style.css'

import {useSelector} from 'react-redux'

export default function SafeForm(props){
    
    
    let initialValues = {
        safeId: props.CurrentValue._id,
        safeName: props.CurrentValue.name,
        ownerName: props.CurrentValue.owner,
        safeType: props.CurrentValue.type,
        safeDescription: props.CurrentValue.description
      };

    const [values, setValues] = useState(Object.keys(props.CurrentValue).length !=0?props.CurrentValue:{"type":"personal"});
    const [error, setError] = useState({});
    const [isLoadingForm, setIsLoadingForm] = useState(false);
   
    

    const options = [{value:'', text:'Please select' },{value:'personal', text:'Personal' },{value:'public', text:'Public' }];
    
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

        
            if("name" == name){
                if(!value){
                    setError({
                        ...error,
                        [name]: "safe name is required",
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
            if("type" == name){
                if(!value){
                    setError({
                        ...error,
                        [name]: "type name is required",
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
            if("owner"==name){
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
            if("description"==name){
                if(value.length<10){
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
                        isError:false
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
        setIsLoadingForm(true);
    if(processValidation())
        props.handleOnSubmit(values);
    else
       setIsLoadingForm(false);
      };

      

return <form onSubmit={handleSubmit}>
        <Input type="hidden" name="_id" id="_id" value={values._id||0} onChange={handleInputChange}/>
        <div className="form-header">
            <h1  className="h1">Create Safe</h1>
            <div className="safe-details-group">
                <img className="safe-image" src={SafeIcon} />
                <p className="create-safe-desc">A Safe is a logical unit to store the secrets. All the safes are created within Vault. You can control access only at the safe level. As a vault administrator you can manage safes but cannot view the content of the safe.</p>
            </div>
        </div>
        
        <Input type="text" id="name" name="name" value={values.name||''} onChange={handleInputChange} label="Safe Name" error={error.name} placeHolder="Safe Name"/>
        
        <Input type="text" id="owner" name="owner" value={values.owner||''} onChange={handleInputChange} label="Owner Name" error={error.owner} placeHolder="Owner Name"/>
        
        <Select id="type" name="type" options={options}  value={values.type||''} onChange={handleInputChange} label="Type" error={error.type}/>
        
        <TextArea 
        type="text" id="description" name="description" placeHolder="Type Description"
        value={values.description||''} rows="5" onChange={handleInputChange} 
        label="Description" info="Please add a minimum of 10 characters" error={error.description} />
        
        <div className="button-group">
            <span className="cancel-btn" onClick={props.CloseModal}>Cancel</span>
            {values._id?<Button loadingStatus={isLoadingForm}>+ Update</Button>:<Button loadingStatus={isLoadingForm}>+ Create</Button>}
        </div>

    </form>;
}