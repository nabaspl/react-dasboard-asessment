import React,{useState} from "react";
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
export function MainContentBody(props) {
    

    const [modalShow, setModalShow] = useState(false);

  const openModal = () => {
    setModalShow(true);
  };
  const handleCloseModal = () => {
    setModalShow(false);
  };
  const handleClick = () => {
    if(props.safe&&props.safe.safeName)
        openModal();
  };
  const handleSubmit = (data) => {
    store.dispatch(createSecret(data));
    setModalShow(false);
  };
  const deleteHandler = (index) =>{
    const data = {safeId:props.safe.safeId,index:index};
    store.dispatch(deleteSecret(data));
  }
  return (
    <div className="panel">
      <div className="panel-head">
        <span>Secrets</span>
        <span>
          <img src={addFolderIcon} onClick={handleClick}/>
        </span>
      </div>
      <div className="panel-body">
      {props.secrets&&
      <FolderList
          items={props.secrets}
          itemIcon={addFolderIcon}
          handelOnDelete={deleteHandler}
        />
        }
            
        {!props.secrets &&
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

if(props.safe&&props.safe.safeName)
  return (
    <div className="main-header">
    <img src={BannnerImg} />
      <div className="banner-safe-info">
        <h1>{props.safe.safeName}</h1>
        <p>{props.safe.safeDescription}</p>
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
