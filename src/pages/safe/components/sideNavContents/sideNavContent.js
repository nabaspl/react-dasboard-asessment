import react, { useState,useEffect } from "react";
import IconInput from "../../../../components/iconInput/iconInput";
import searchIcon from "../../../../assets/images/searchIcon.svg";
import PlusBtnImg from "../../../../assets/images/plusBtnImage.svg";
import computerImage from "../../../../assets/images/computerImage.svg";
import notFound from "../../../../assets/images/404.svg";
import { ImageBtn } from "../../../../components/form/button/button";
import safeIcon from "../../../../assets/images/safeIcon.svg";
import ItemsList from "../../../../components/itemLists/ItemLists";

import Modal from "../../../../components/modal/modal";
import SafeForm from "../form/safeForm";

import store from "../../../../redux/store";
import { safeCreate, safeEdit,safeDeleted,setActiveSafe,filterSafe} from "../../../../redux/safe/actions";
import { useSelector } from "react-redux";

import { debounce } from 'lodash';



import "./style.css";

export function SideNavTopContent(props) {
  const onChangeHandler = (e) =>{
    delayedHandleChange(e.target.value);
  }

  const delayedHandleChange = debounce(eventData => store.dispatch(filterSafe(eventData)), 500);



    let items = useSelector((state) => state.SafeReducer.safes);
  return (
    <div className="sidebar-top-wrapper">
      <ul className="safe-types">
        <li>
          All Safe <span className="safe-count">({items.length})</span>
        </li>
      </ul>
      <IconInput icon={searchIcon} onChange={onChangeHandler} placeHolder="search"/>
    </div>
  );
}
export function SideNavBodyContent(props) {
  const [modalShow, setModalShow] = useState(false);
  const activeSafeId = useSelector((state) => state.SafeReducer.activeSafe);

  
  const openModal = () => {
    setModalShow(true);
  };
  const handleCloseModal = () => {
    setModalShow(false);
  };

  const handleSubmit = (data) => {
    store.dispatch(safeCreate(data));
    store.dispatch(safeEdit(0));
    
    setModalShow(false);
  };

  const handleEdit = (safeId) => {
    store.dispatch(safeEdit(safeId));
    
    setModalShow(true);
  };
  const handleDelete = (safeId) => {
    
    store.dispatch(safeDeleted(safeId));
    
  };
  const handleLiClick = (safeId) => {
    store.dispatch(setActiveSafe(safeId));
  };
  
  let curretFormData = {};
  let items = useSelector((state) => state.SafeReducer.safes);
  let filter = useSelector((state) => state.SafeReducer.filter);

  if(filter)
    items = items.filter((item, index) => item.safeName.toUpperCase().indexOf(filter.toUpperCase()) > -1);

  const editIndex = useSelector((state) => state.SafeReducer.editSafes);
  const editSafeData = useSelector((state) => state.SafeReducer.editSafeData);
  if (editIndex) curretFormData = editSafeData[0];

  if (items && items.length)
    return (
      <div className="sidebar-body-wrapper with-list">
        <ItemsList
          items={items}
          itemIcon={safeIcon}
          handelOnEdit={handleEdit}
          handelOnDelete={handleDelete}
          LiClickHandler={handleLiClick}
          activeSafe={activeSafeId}
        />
        <ImageBtn src={PlusBtnImg} onClickHandler={openModal} />
        {modalShow && (
          <Modal CloseModal={handleCloseModal}>
            <SafeForm
              handleOnSubmit={handleSubmit}
              CurrentValue={curretFormData}
              CloseModal={handleCloseModal}
            />
          </Modal>
        )}
      </div>
    );
    else if(filter && !items.length)
    return(
      <div className="sidebar-body-wrapper">
      <div className="list-empty-div">
        <img src={notFound} />
        <span>No safe Found!</span>
      </div>
    </div>
    );
  else
    return (
      <div className="sidebar-body-wrapper">
        <div className="list-empty-div">
          <img src={computerImage} />
          <span>Create a Safe to get started!</span>
        </div>
        <ImageBtn src={PlusBtnImg} onClickHandler={openModal} />
        {modalShow && (
          <Modal CloseModal={handleCloseModal}>
            <SafeForm
              handleOnSubmit={handleSubmit}
              CurrentValue={curretFormData}
              CloseModal={handleCloseModal}
            />
          </Modal>
        )}
      </div>
    );
}
