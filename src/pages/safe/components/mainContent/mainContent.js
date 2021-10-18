import React,{useState,useEffect} from "react";
import BannnerImg from "../../../../assets/images/bannerImage.svg";
import addFolderIcon from "../../../../assets/images/addFolderIcon.svg";
import secretsLockerImage from "../../../../assets/images/secretsLockerImage.svg";
import "./style.css";
import Button from "../../../../components/form/button/button";
import Modal from "../../../../components/modal/modal";
import {FolderList} from "../../../../components/itemLists/ItemLists";
import SecretForm from "../form/secretForm";
import store from "../../../../redux/store";
import {createSecret,deleteSecret } from "../../../../redux/safe/actions";
import safeApi from '../../../../apis/safe'
import { useSelector } from "react-redux";
export function MainContentBody(props) {
    

  const [modalShow, setModalShow] = useState(false);
  const activeSafeId = useSelector((state) => state.SafeReducer.activeSafe);
  const [_safes,setSafes_] = useState({});
  const [_secrets,setSecrets_] = useState([]);
  const [isLoaded,setIsLoaded] = useState(false);
  
  useEffect(() => {
    if(activeSafeId)
    safeApi.get(`get-secrets/${activeSafeId}`)
    .then(res => {
        setSafes_(res.data);
        setSecrets_(res.data.secrets)
        setIsLoaded(true);
    })
    .catch(function (error) {
        console.log(error);
    })
    else{
    setIsLoaded(true);
    setSafes_({});
    setSecrets_([])

    }
  },[activeSafeId,isLoaded]);



  const openModal = () => {
    setModalShow(true);
  };
  const handleCloseModal = () => {
    setModalShow(false);
  };
  const handleClick = () => {
    if(Object.keys(_safes).length !=0 )
       openModal();
  };
  const handleSubmit = (data) => {
    // store.dispatch(createSecret(data));
    safeApi.patch(`/create-secret/${activeSafeId}`,data)
    .then((res) => {
        setModalShow(false);
        reLoad();
    }).catch((error) => {
        console.log(error)
    });
  };
  const deleteHandler = (item) =>{
    // const data = {safeId:props.safe.safeId,index:index};
    // store.dispatch(deleteSecret(data));
    safeApi.delete(`/delete-secret/${activeSafeId}/${item}`).then(res => {
      reLoad();
  })
    .catch(function (error) {
        console.log(error);
  })

  }
  const reLoad=()=>{
    setIsLoaded(false);
}
  if(!isLoaded)
       return <div className="loadig-container">Loading<div className="loader"></div></div>
  if(_secrets.length)
  return (
    <div className="panel">
      <div className="panel-head">
        <span>Secrets</span>
        <span>
          <img src={addFolderIcon} onClick={handleClick}/>
        </span>
      </div>
      <div className="panel-body">
      {_secrets.length &&
      <FolderList
          items={_secrets}
          itemIcon={addFolderIcon}
          handelOnDelete={deleteHandler}
        />
        }
         
      </div>
      {modalShow && (<Modal CloseModal={handleCloseModal}><SecretForm safeId={props.safe.safeId} secret=""  handleOnSubmit={handleSubmit} CloseModal={handleCloseModal}/></Modal>)}
    </div>
  );
  else
    return (
    <div className="panel">
      <div className="panel-head">
        <span>Secrets</span>
        <span>
          <img src={addFolderIcon} onClick={handleClick}/>
        </span>
      </div>
      <div className="panel-body">
      
            
        {!_secrets.length&&
        <div className="create-new-safe-wrapper">
        <div className="create-new-sec-info">
        <img src={secretsLockerImage} />
          <p className="about-sec">
            You do not have acess to this Safe and cannot view it’s contents
          </p>
        </div>
        <Button onClickHandler={handleClick} classLists="add-btn">+ ADD</Button>
        </div>
        }
         
      </div>
      {modalShow && (<Modal CloseModal={handleCloseModal}><SecretForm safeId={props.safe.safeId} secret=""  handleOnSubmit={handleSubmit} CloseModal={handleCloseModal}/></Modal>)}
    </div>
  );
}

export function MainContentHead(props) {
  const activeSafeId = useSelector((state) => state.SafeReducer.activeSafe);
  const [safeName,setSafeName] = useState('');
  const [safeOwner,setSafeOwner] = useState('');
  const [safeDescription,setSafeDescription] = useState('');
  const [isLoaded1,setIsLoaded1] = useState(false);
  useEffect(() => {
    if(activeSafeId)
    safeApi.get(`get-secrets/${activeSafeId}`)
    .then(res => {
        setSafeName(res.data.name);
        setSafeOwner(res.data.owner);
        setSafeDescription(res.data.description);
        setIsLoaded1(true);
    })
    .catch(function (error) {
        console.log(error);
    })
    else{
    setIsLoaded1(true);
    setSafeName('');
    setSafeOwner('');
    setSafeDescription('');
    }
  },[activeSafeId,isLoaded1]);
if(safeName)
  return (
    <div className="main-header">
    <img src={BannnerImg} />
      <div className="banner-safe-info">
        <h1>{safeName} / {safeOwner}</h1>
        <p>{safeDescription}</p>
      </div>
    </div>
  );
  else
  return (
    <div className="main-header">
      <img src={BannnerImg} />
      <div className="banner-safe-info">
        <h1>No Safes Created Yet</h1>
        <p>Create a Safe to see your secrets, folders and permissions here</p>
      </div>
    </div>
  );
}
