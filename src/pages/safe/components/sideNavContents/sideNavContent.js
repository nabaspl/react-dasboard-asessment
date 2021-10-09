import react, { useState } from "react";
import IconInput from "../../../../components/iconInput/iconInput";
import searchIcon from "../../../../assets/images/searchIcon.svg";
import PlusBtnImg from "../../../../assets/images/plusBtnImage.svg";
import computerImage from "../../../../assets/images/computerImage.svg";
import { ImageBtn } from "../../../../components/form/button/button";
import safeIcon from "../../../../assets/images/safeIcon.svg";
import ItemsList from "../../../../components/itemLists/ItemLists";

import Modal from "../../../../components/modal/modal";
import SafeForm from "../form/safeForm";

import store from "../../../../redux/store";
import { safeCreate, safeEdit,safeDeleted,createSecret } from "../../../../redux/safe/actions";
import { useSelector } from "react-redux";

import "./style.css";

export function SideNavTopContent(props) {
    let items = useSelector((state) => state.SafeReducer.safes);
  return (
    <div className="sidebar-top-wrapper">
      <ul className="safe-types">
        <li>
          All Safe <span className="safe-count">({items.length})</span>
        </li>
      </ul>
      <IconInput icon={searchIcon} />
    </div>
  );
}
export function SideNavBodyContent(props) {
  const [modalShow, setModalShow] = useState(false);

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
    let secretData= {safeId:1,secret:"test"};
    console.log(secretData);
    store.dispatch(createSecret(secretData));
    setModalShow(true);
  };
  const handleDelete = (safeId) => {
    store.dispatch(safeDeleted(safeId));
  };
  
  let curretFormData = {};
  let items = useSelector((state) => state.SafeReducer.safes);
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
        />
        <ImageBtn src={PlusBtnImg} onClickHandler={openModal} />
        {modalShow && (
          <Modal>
            <SafeForm
              handleOnSubmit={handleSubmit}
              CurrentValue={curretFormData}
              CloseModal={handleCloseModal}
            />
          </Modal>
        )}
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
          <Modal>
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
