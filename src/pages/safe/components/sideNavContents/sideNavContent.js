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
import { safeCreate, safeEdit,safeDeleted,setActiveSafe,filterSafe, setSafeCount} from "../../../../redux/safe/actions";
import { useSelector } from "react-redux";

import { debounce } from 'lodash';

import safeApi from '../../../../apis/safe'


import "./style.css";

export function SideNavTopContent(props) {
  const onChangeHandler = (e) =>{
    delayedHandleChange(e.target.value);
  }

  const delayedHandleChange = debounce(eventData => store.dispatch(filterSafe(eventData)), 500);
  const safeCount = useSelector((state) => state.SafeReducer.safeCount);
  return (
    <div className="sidebar-top-wrapper">
      <ul className="safe-types">
        <li>
          All Safe <span className="safe-count">({safeCount})</span>
        </li>
      </ul>
      <IconInput icon={searchIcon} onChange={onChangeHandler} placeHolder="search"/>
    </div>
  );
}
export function SideNavBodyContent(props) {
  const [modalShow, setModalShow] = useState(false);
  const activeSafeId = useSelector((state) => state.SafeReducer.activeSafe);

  const [_safes,setSafes_] = useState([]);
  const [isLoaded,setIsLoaded] = useState(false);
  useEffect(() => {
    safeApi.get()
    .then(res => {
        setSafes_(res.data)
        store.dispatch(setSafeCount(res.data.length));
        setIsLoaded(true);
        if(res.data.length&&res.data[0]._id)
          store.dispatch(setActiveSafe(res.data[0]._id))
    })
    .catch(function (error) {
        console.log(error);
    })
  },[isLoaded]);

  const reLoad=()=>{
      setIsLoaded(false);
  }

  
  const openModal = () => {
    setCurretFormData({});
    setModalShow(true);
  };
  const handleCloseModal = () => {
    setModalShow(false);
  };

  const handleSubmit = (data) => {
    //store.dispatch(safeCreate(data));
    //store.dispatch(safeEdit(0));

    if(data._id)
    safeApi.patch(`/${data._id}`,data)
    .then((res) => {
        setModalShow(false);
        reLoad();
    }).catch((error) => {
        console.log(error)
    });
    else
    safeApi.post('',data)
    .then((res) => {
        setModalShow(false);
        reLoad();
    }).catch((error) => {
        if(error.message.code == 11000)
          alert("safe name:"+error.message.keyValue.name + "alredy exist");
    });

  };
  const[curretFormData,setCurretFormData] = useState({});
  const handleEdit = (safeId) => {
    // store.dispatch(safeEdit(safeId));

    safeApi.get(`/${safeId}`).then(res => {
                                            setCurretFormData(res.data[0])

                                            setModalShow(true);
                                        })
                                          .catch(function (error) {
                                              console.log(error);
                                        })
    
    
  };
  const handleDelete = (safeId) => {
    
    //store.dispatch(safeDeleted(safeId));
    
    safeApi.delete(`/${safeId}`).then(res => {
      store.dispatch(setActiveSafe(0));
      reLoad();
  })
    .catch(function (error) {
        console.log(error);
  })
    
  };
  const handleLiClick = (safeId) => {
    store.dispatch(setActiveSafe(safeId));
  };
  
  
  let items = _safes;
  let filter = useSelector((state) => state.SafeReducer.filter);

  if(filter)
    items = items.filter((item, index) => item.name.toUpperCase().indexOf(filter.toUpperCase()) > -1);

  const editIndex = useSelector((state) => state.SafeReducer.editSafes);
  //const editSafeData = useSelector((state) => state.SafeReducer.editSafeData);
  //if (editIndex) 
  if(!isLoaded)
       return <div className="loadig-container">Loading<div className="loader"></div></div>
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
