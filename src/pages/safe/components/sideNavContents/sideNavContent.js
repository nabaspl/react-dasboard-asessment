import react from "react";
import IconInput from '../../../../components/iconInput/iconInput';
import searchIcon from '../../../../assets/images/searchIcon.svg'
import PlusBtnImg from '../../../../assets/images/plusBtnImage.svg'
import computerImage from '../../../../assets/images/computerImage.svg'
import {ImageBtn}  from '../../../../components/form/button/button'
import safeIcon from '../../../../assets/images/safeIcon.svg'
import ItemsList from '../../../../components/itemLists/ItemLists';
import './style.css';

const openModal =()=>{
    const modal = document.getElementById("myModal");
    modal.style.display ='block';
}


export function SideNavTopContent(props){
    return <div className="sidebar-top-wrapper">
        <ul className="safe-types">
            <li>All Safe <span className="safe-count">({props.safesCount})</span></li>
        </ul>
        <IconInput icon={searchIcon}/>
    </div>;
}
export function SideNavBodyContent(props){

    if(props.itemLists)
        return <div className="sidebar-body-wrapper with-list">
                    <ItemsList items={props.itemLists} itemIcon={safeIcon}/>
                    <ImageBtn src={PlusBtnImg} onClickHandler={openModal}/>
                </div>;
    else
        return <div className="sidebar-body-wrapper">
                    <div className="list-empty-div"><img src={computerImage}/><span>Create a Safe to get started!</span></div>
                    <ImageBtn src={PlusBtnImg} onClickHandler={openModal}/>
                </div>;
}